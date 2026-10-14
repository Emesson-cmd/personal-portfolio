import { frontend, backend, mobile } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "header.about",
  },
  {
    id: "projects",
    title: "header.projects",
  },
  {
    id: "contact",
    title: "header.contact",
  },
];

const services = [
  {
    title: "about.front-end-developer",
    icon: frontend,
  },
  {
    title: "about.back-end-developer",
    icon: backend,
  },
  {
    title: "about.mobile-developer",
    icon: mobile,
  },
];

// Projetos, experiências e tecnologias agora vêm de src/content.
export {
  technologies,
  experiences,
  projects,
  techIcons,
  localize,
} from "../content";

export { services };
