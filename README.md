## Built With

- React.js
- Three.js
- Framer Motion
- TailwindCSS

## Getting Started

To get started, follow these simple steps:

### Prerequisites

Make sure you have node `16.0.0` or higher and npm `9.0.0` or higher installed.

## Install

- After opening the files in Visual Studio Code, open the **VS Code** integrated terminal and run the following commands:

```
npm install
```

This will install all the packages and dependencies used in the project.

## Usage

- Run the following command to start a local server:

```
npm run dev
```

This will open up the project on a browser on `http://localhost:5173/`

## Build

- To create a production build:

```
npm run build
```

- To preview the site as it will appear once deployed:

```
npm run preview
```

## Atualizando o conteúdo

Projetos, experiências e tecnologias ficam em `src/content` e são carregados automaticamente (`import.meta.glob`). Não é preciso mexer em componentes nem fazer imports manuais.

- Novo projeto: crie `src/content/projects/<slug>/index.json` e coloque as imagens na mesma pasta. A ordem do carrossel segue o nome do arquivo (`01-home.png`, `02-...`). No grid, os projetos aparecem do maior `order` para o menor.
- Nova experiência: crie `src/content/experiences/NN-empresa.json` (o prefixo `NN` define a ordem) e coloque o logo em `experiences/logos/`.
- Nova tecnologia: adicione o ícone em `src/content/technologies/icons/<nome>.png`. Para ela aparecer na seção de skills, inclua `<nome>` em `technologies/index.json`. Tags de projeto com esse mesmo nome passam a mostrar o ícone.
- Textos traduzíveis (`description`, `title`) aceitam `{ "en": "...", "pt": "...", "es": "..." }`. Se faltar algum idioma, o texto em inglês é usado.

## Feedback and Contributions

If you have any feedback, suggestions, or would like to contribute to this project, your involvement is highly valued. Feel free to open an [issue](../../issues/) or submit a pull request with your ideas and enhancements. Remember, this template is a starting point, and the true magic lies in making it your own. Enjoy the journey of creating a stunning portfolio that represents your unique talents and accomplishments!

Happy coding and showcasing!

## Show your support

Give a ⭐️ if you like this project!
