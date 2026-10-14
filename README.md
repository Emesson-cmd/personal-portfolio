# Emesson's Portfolio

A personal portfolio website built with React, Three.js and TailwindCSS. It showcases projects, professional experience and tech skills, with 3D elements, smooth animations and support for English, Portuguese and Spanish.

## Features

- Interactive 3D tech icons rendered with Three.js (React Three Fiber)
- Animations with Framer Motion
- Multi-language UI (EN / PT / ES) via i18next
- Project grid with tags, image carousel and image modal
- Experience timeline
- Contact form powered by EmailJS
- File-based content: add projects, experiences and technologies without touching components

## Built With

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / Drei
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)
- [i18next](https://www.i18next.com/) / react-i18next
- [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

- Node.js `16.0.0` or higher
- npm `9.0.0` or higher

### Installation

```bash
git clone <repository-url>
cd personal-portfolio
npm install
```

### Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_API=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Don't commit this file.

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the dev server at `http://localhost:5173/` |
| `npm run build`   | Create a production build in `dist/`             |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint on `src/`                             |

## Project Structure

```
src/
├── assets/        # Images, icons and backgrounds
├── components/    # React components (sections, cards, 3D canvas)
├── constants/     # Shared constants
├── content/       # Portfolio content (projects, experiences, technologies)
├── hoc/           # Higher-order components (section wrapper)
├── locales/       # UI translations (en, pt, es)
├── utils/         # Animation helpers (Framer Motion variants)
└── i18n.js        # i18next setup
```

## Updating Content

Projects, experiences and technologies live in `src/content` and are loaded automatically with `import.meta.glob`. No component changes or manual imports are needed.

### Admin panel (Sveltia CMS)

Open `/admin/` on the deployed site and click **Sign In with Token**. Use a GitHub fine-grained token scoped to this repository with **Contents: Read and write**. Every save creates a commit on `main`, and Netlify redeploys the site in about 1–2 minutes. The configuration is in `public/admin/config.yml`.

Image fields accept a URL (`https://...`), a public path (`/media/...`) or a path relative to the JSON file (`icons/react.png`, `01.png`).

### Adding a project

Create `src/content/projects/<slug>/index.json` and put the images in the same folder. The carousel follows the `images` list (if omitted, all images in the folder in file-name order). Projects are sorted by `order` ascending (1 = first) and hidden when `visible` is `false`.

```json
{
  "order": 1,
  "visible": true,
  "images": ["01-home.png", "https://example.com/screenshot.png"],
  "name": "My Project",
  "description": {
    "en": "Short description in English.",
    "pt": "Descrição curta em português.",
    "es": "Descripción corta en español."
  },
  "tags": ["react", "typescript"],
  "repo": "https://github.com/user/repo",
  "demo": "https://my-project.app"
}
```

### Adding an experience

Create `src/content/experiences/<company>.json` and put the logo in `src/content/experiences/logos/`. Experiences are sorted by `order` ascending.

```json
{
  "order": 1,
  "visible": true,
  "title": { "en": "Full-Stack Developer", "pt": "Desenvolvedor Full Stack" },
  "company_name": "Company Name",
  "logo": "logos/company.jpeg",
  "iconBg": "#333333",
  "date": "Oct 2023 - Present"
}
```

### Adding a technology

Add an item to `skills` in `src/content/technologies/index.json`:

```json
{ "name": "docker", "icon": "icons/docker.png", "visible": true }
```

The list order is the order in the skills section, which shows up to `maxSkills` visible skills that have an icon. Hidden skills (`visible: false`) can still be used as project tags. Project tags with the same `name` display the icon.

### Translations

Translatable fields (`description`, `title`) accept either a plain string or an object like `{ "en": "...", "pt": "...", "es": "..." }`. If a language is missing, the English text is used. UI strings live in `src/locales/*.json`.

## Feedback and Contributions

Feedback, suggestions and contributions are welcome. Feel free to open an [issue](../../issues/) or submit a pull request.

## Show Your Support

Give a ⭐️ if you like this project.
