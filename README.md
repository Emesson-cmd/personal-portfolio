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

### Adding a project

Create `src/content/projects/<slug>/index.json` and put the images in the same folder. The carousel order follows the file names (`01-home.png`, `02-...`). In the grid, projects are sorted from highest to lowest `order`.

```json
{
  "order": 100,
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

Create `src/content/experiences/NN-company.json` (the `NN` prefix sets the order) and put the logo in `src/content/experiences/logos/`.

```json
{
  "title": { "en": "Full-Stack Developer", "pt": "Desenvolvedor Full Stack" },
  "company_name": "Company Name",
  "logo": "company.jpeg",
  "iconBg": "#333333",
  "date": "Oct 2023 - Present"
}
```

### Adding a technology

1. Add the icon at `src/content/technologies/icons/<name>.png` (also accepts `jpg`, `jpeg`, `webp`, `svg`, `gif`).
2. To show it in the skills section, add `<name>` to the `skills` list in `src/content/technologies/index.json`.

Project tags with the same `<name>` will automatically display the icon.

### Translations

Translatable fields (`description`, `title`) accept either a plain string or an object like `{ "en": "...", "pt": "...", "es": "..." }`. If a language is missing, the English text is used. UI strings live in `src/locales/*.json`.

## Feedback and Contributions

Feedback, suggestions and contributions are welcome. Feel free to open an [issue](../../issues/) or submit a pull request.

## Show Your Support

Give a ⭐️ if you like this project.
