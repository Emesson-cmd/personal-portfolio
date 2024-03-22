import {
  frontend,
  backend,
  mobile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  mongodb,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  senai,
  cmos,
  ufca,
  // pokedex,
  notes,
  apple,
  portfolio,
  barbertech,
  tonys,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'header.about',
  },
  {
    id: 'projects',
    title: 'header.projects',
  },
  {
    id: 'contact',
    title: 'header.contact',
  },
];

const services = [
  {
    title: 'about.front-end-developer',
    icon: frontend,
  },
  {
    title: 'about.back-end-developer',
    icon: backend,
  },
  {
    title: 'about.mobile-developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'experience.experiences.exp1',
    company_name: 'SENAI Digital Soluions',
    icon: senai,
    iconBg: '#333333',
    date: 'Oct 2023 - Present',
  },
  {
    title: 'experience.experiences.exp2',
    company_name: 'CMOS DRAKE',
    icon: cmos,
    iconBg: '#333333',
    date: 'Nov 2022 - Oct 2023',
  },
  {
    title: 'experience.experiences.exp3',
    company_name: 'UFCA Universidade Federal do Cariri',
    icon: ufca,
    iconBg: '#333333',
    date: 'May 2022 - Nov 2022',
  },
  {
    title: 'experience.experiences.exp4',
    company_name: 'UFCA Universidade Federal do Cariri',
    icon: ufca,
    iconBg: '#333333',
    date: 'Apr 2021 - Dez 2021',
  },
];

const projects = [
  // {
  //   id: 'project-1',
  //   name: 'Pokedex',
  //   description: 'projects.projects-description.p1',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: pokedex,
  //   repo: 'https://github.com/Emesson-cmd/projeto_pokedex',
  //   demo: 'http://pokedex.kesug.com/',
  // },
  {
    id: 'project-6',
    name: 'Notes',
    description: 'projects.projects-description.p6',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: notes,
    repo: 'https://github.com/Emesson-cmd/nlw-expert-react',
    demo: 'https://wondrous-pony-f58ec0.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Apple',
    description: 'projects.projects-description.p2',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: apple,
    repo: 'https://github.com/Emesson-cmd/recriando_apple',
    demo: 'https://emesson-cmd.github.io/recriando_apple/apple/',
  },
  {
    id: 'project-3',
    name: '3D Portfolio',
    description: 'projects.projects-description.p3',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/Emesson-cmd/portfolio',
    demo: 'https://main--sage-scone-193ddf.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Barber Tech',
    description: `projects.projects-description.p4`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: barbertech,
    repo: null,
    demo: 'https://www.linkedin.com/posts/emesson-cavalcante-0662971b6_firebase-reactnative-javascript-activity-7013271284906135552-ciSS?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 'project-5',
    name: 'Tonys Cabeleireiro',
    description: 'projects.projects-description.p5',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tonys,
    repo: null,
    demo: 'https://tonyscabeleireiro.com.br/',
  },
];

export { services, technologies, experiences, projects };
