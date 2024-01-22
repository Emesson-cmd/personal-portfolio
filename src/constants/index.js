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
  pokedex,
  apple,
  portfolio,
  barbertech,
  tonys,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
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
    title: 'Full-Stack Developer',
    company_name: 'SENAI Digital Soluions',
    icon: senai,
    iconBg: '#333333',
    date: 'Oct 2023 - Present',
  },
  {
    title: 'Full-Stack Develop',
    company_name: 'CMOS DRAKE',
    icon: cmos,
    iconBg: '#333333',
    date: 'Nov 2022 - Oct 2023',
  },
  {
    title: 'Intern Software Devellop',
    company_name: 'UFCA Universidade Federal do Cariri',
    icon: ufca,
    iconBg: '#333333',
    date: 'May 2022 - Nov 2022',
  },
  {
    title: 'Intern Software Developer',
    company_name: 'UFCA Universidade Federal do Cariri',
    icon: ufca,
    iconBg: '#333333',
    date: 'Apr 2021 - Dez 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pokedex',
    description: 'It`s a simple Pokedex Project',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: pokedex,
    repo: 'https://github.com/Emesson-cmd/projeto_pokedex',
    demo: 'http://pokedex.kesug.com/',
  },
  {
    id: 'project-2',
    name: 'Apple',
    description: 'Simple Iphone Landing Page',
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
    description: 'This is a portfolio template where I use 3D objetcs.',
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
    description: `A complete barber shop app for mobile devices.`,
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
    description:
      'This is a barber shop website where customers can schedule an appointment in a barber shop.',
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
