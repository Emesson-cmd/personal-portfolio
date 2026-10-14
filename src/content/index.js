/**
 * Carrega o conteúdo do portfólio a partir de src/content via import.meta.glob.
 * Os arquivos são editados pelo painel /admin (Sveltia CMS) ou manualmente.
 *
 * - technologies/index.json: { maxSkills, skills: [{ name, icon, visible }] }
 *   A ordem da lista é a ordem na seção Skills.
 * - projects/<slug>/index.json: { order, visible, name, description, images, tags, ... }
 * - experiences/*.json: { order, title, company_name, logo, iconBg, date }
 *
 * Campos de imagem aceitam URL absoluta (https://...), caminho público (/media/...)
 * ou caminho relativo ao arquivo JSON (ex.: "icons/react.png", "01.png").
 */

import technologiesData from "./technologies/index.json";

const fileName = (path) => path.split("/").pop();
const byPath = (a, b) => a.localeCompare(b, undefined, { numeric: true });
const byOrder = (a, b) =>
  (a.order ?? Infinity) - (b.order ?? Infinity) || byPath(a.id, b.id);

// Obs.: o Vite exige globs como string literal (sem template/variáveis).

/**
 * Resolve um valor de imagem vindo do JSON para uma URL utilizável.
 * @param {string} value  valor salvo no JSON
 * @param {string} baseDir diretório do JSON (ex.: "./technologies/")
 * @param {Record<string,string>} files resultado do import.meta.glob
 */
const resolveAsset = (value, baseDir, files) => {
  if (!value) return undefined;
  if (/^(https?:)?\/\//.test(value) || value.startsWith("/")) return value;
  const key = baseDir + value.replace(/^\.\//, "");
  if (!files[key]) console.warn(`[content] Imagem não encontrada: ${key}`);
  return files[key];
};

// ---------- Tecnologias ----------
const techAssetFiles = import.meta.glob(
  "./technologies/**/*.{png,jpg,jpeg,webp,svg,gif,avif}",
  { eager: true, import: "default" },
);

/** Todas as tecnologias cadastradas (inclusive ocultas), na ordem definida. */
export const allTechnologies = technologiesData.skills.map((skill) => ({
  ...skill,
  visible: skill.visible !== false,
  icon: resolveAsset(skill.icon, "./technologies/", techAssetFiles),
}));

/** Mapa nome-da-tecnologia -> URL do ícone (usado nas tags dos projetos). */
export const techIcons = Object.fromEntries(
  allTechnologies.filter((t) => t.icon).map((t) => [t.name, t.icon]),
);

/** Tecnologias exibidas na seção Skills: visíveis, com ícone, até maxSkills. */
export const technologies = allTechnologies
  .filter((t) => t.visible && t.icon)
  .slice(0, technologiesData.maxSkills ?? Infinity);

// ---------- Experiências ----------
const experienceFiles = import.meta.glob("./experiences/*.json", {
  eager: true,
  import: "default",
});
const experienceAssets = import.meta.glob(
  "./experiences/**/*.{png,jpg,jpeg,webp,svg,gif,avif}",
  { eager: true, import: "default" },
);

export const experiences = Object.entries(experienceFiles)
  .map(([path, exp]) => ({
    id: fileName(path).replace(/\.json$/, ""),
    ...exp,
    icon: resolveAsset(exp.logo, "./experiences/", experienceAssets),
  }))
  .filter((exp) => exp.visible !== false)
  .sort(byOrder);

// ---------- Projetos ----------
const projectFiles = import.meta.glob("./projects/*/index.json", {
  eager: true,
  import: "default",
});
const projectImages = import.meta.glob(
  "./projects/*/**/*.{png,jpg,jpeg,webp,svg,gif,avif}",
  { eager: true, import: "default" },
);

export const projects = Object.entries(projectFiles)
  .map(([path, project]) => {
    const folder = path.slice(0, -"index.json".length);

    // Usa a lista "images" do JSON; sem ela, pega todas as imagens da pasta.
    const image = Array.isArray(project.images)
      ? project.images
          .map((img) => resolveAsset(img, folder, projectImages))
          .filter(Boolean)
      : Object.keys(projectImages)
          .filter((img) => img.startsWith(folder))
          .sort(byPath)
          .map((img) => projectImages[img]);

    return {
      id: folder.split("/").at(-2),
      ...project,
      image,
    };
  })
  .filter((project) => project.visible !== false)
  .sort(byOrder);

/**
 * Resolve um campo traduzível ({ en, pt, es } ou string) para o idioma atual.
 */
export const localize = (value, lang) => {
  if (value == null || typeof value === "string") return value;
  const base = lang?.split("-")[0];
  return value[lang] || value[base] || value.en || Object.values(value)[0];
};
