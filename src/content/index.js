/**
 * Carrega o conteúdo do portfólio a partir de src/content via import.meta.glob.
 * Para adicionar itens basta criar arquivos; nenhum import manual é necessário.
 *
 * - projects/<slug>/index.json + imagens (ordenadas pelo nome do arquivo)
 * - experiences/*.json (ordenadas pelo nome do arquivo) + experiences/logos/*
 * - technologies/index.json (lista "skills") + technologies/icons/<nome>.<ext>
 */

import technologiesData from "./technologies/index.json";

const fileName = (path) => path.split("/").pop();
const baseName = (path) => fileName(path).replace(/\.[^.]+$/, "");
const byPath = (a, b) => a.localeCompare(b, undefined, { numeric: true });

// ---------- Tecnologias ----------
// Obs.: o Vite exige globs como string literal (sem template/variáveis).
const techIconFiles = import.meta.glob(
  "./technologies/icons/*.{png,jpg,jpeg,webp,svg,gif}",
  { eager: true, import: "default" },
);

/** Mapa nome-da-tecnologia -> URL do ícone (ex.: "react" -> react.png). */
export const techIcons = Object.fromEntries(
  Object.entries(techIconFiles).map(([path, url]) => [baseName(path), url]),
);

export const technologies = technologiesData.skills.map((name) => {
  if (!techIcons[name]) {
    console.warn(`[content] Ícone não encontrado para a tecnologia "${name}"`);
  }
  return { name, icon: techIcons[name] };
});

// ---------- Experiências ----------
const experienceFiles = import.meta.glob("./experiences/*.json", {
  eager: true,
  import: "default",
});
const experienceLogos = import.meta.glob(
  "./experiences/logos/*.{png,jpg,jpeg,webp,svg,gif}",
  { eager: true, import: "default" },
);
const logoByName = Object.fromEntries(
  Object.entries(experienceLogos).map(([path, url]) => [fileName(path), url]),
);

export const experiences = Object.keys(experienceFiles)
  .sort(byPath)
  .map((path) => {
    const exp = experienceFiles[path];
    return { id: baseName(path), ...exp, icon: logoByName[exp.logo] };
  });

// ---------- Projetos ----------
const projectFiles = import.meta.glob("./projects/*/index.json", {
  eager: true,
  import: "default",
});
const projectImages = import.meta.glob(
  "./projects/*/*.{png,jpg,jpeg,webp,svg,gif}",
  {
    eager: true,
    import: "default",
  },
);

export const projects = Object.entries(projectFiles)
  .map(([path, project]) => {
    const folder = path.slice(0, -"index.json".length);
    const image = Object.keys(projectImages)
      .filter((img) => img.startsWith(folder))
      .sort(byPath)
      .map((img) => projectImages[img]);

    return {
      id: folder.split("/").at(-2),
      ...project,
      image,
    };
  })
  .sort((a, b) => (b.order ?? 0) - (a.order ?? 0));

/**
 * Resolve um campo traduzível ({ en, pt, es } ou string) para o idioma atual.
 */
export const localize = (value, lang) => {
  if (value == null || typeof value === "string") return value;
  const base = lang?.split("-")[0];
  return value[lang] ?? value[base] ?? value.en ?? Object.values(value)[0];
};
