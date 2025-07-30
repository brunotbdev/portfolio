// import img1 from "./images/projects/postgrestore.jpg";
// import img2 from "./images/projects/dialecto.webp";
// import img3 from "./images/projects/portfolio.webp";

// import _html from "./images/stack/html5-color.svg";
// import _css from "./images/stack/css-color.svg";
// import _js from "./images/stack/javascript-color.svg";
// import _react from "./images/stack/react-color.svg";
// import _typescript from "./images/stack/typescript-color.svg";
// import _git from "./images/stack/git-color.svg";
// import _github from "./images/stack/github-color.svg";
// import _node from "./images/stack/nodedotjs-color.svg";
// import _express from "./images/stack/express-color.svg";
// import _postgresql from "./images/stack/postgresql-color.svg";
// import _docker from "./images/stack/docker-color.svg";
// import _npm from "./images/stack/npm-color.svg";

interface LanguageMap {
  [key: string]: string;
}

export interface Card {
  id: number;
  img: string;
  title: string;
  description: string;
  languages: string[];
  links: Record<string, string>[];
  background: string;
}

export const languagesMap: LanguageMap = {
  html: "./images/stack/html5-color.svg",
  css: "./images/stack/css-color.svg",
  js: "./images/stack/javascript-color.svg",
  react: "./images/stack/react-color.svg",
  typescript: "./images/stack/typescript-color.svg",
  node: "./images/stack/nodedotjs-color.svg",
  express: "./images/stack/express-color.svg",
  postgresql: "./images/stack/postgresql-color.svg",
  docker: "./images/stack/docker-color.svg",
  git: "./images/stack/git-color.svg",
  github: "./images/stack/github-color.svg",
  npm: "./images/stack/npm-color.svg",
};

export const cards: Card[] = [
  {
    id: 1,
    img: "./images/projects/postgrestore.jpg",
    title: "PostgreStore",
    description: "postgrestore",
    languages: [
      "html",
      "css",
      "js",
      "react",
      "node",
      "express",
      "postgresql",
      "docker",
      "git",
    ],
    links: [
      {
        name: "Github",
        icon: "github",
        link: "https://github.com/brunotbdev/PostgreStore",
      },
    ],
    background: "linear-gradient(90deg,#3AC965 0%, #0CA63A 100%)",
  },
  {
    id: 2,
    img: "./images/projects/dialecto.webp",
    title: "Dialecto",
    description: "dialecto",
    languages: ["js", "react", "typescript", "git"],
    links: [
      {
        name: "Github",
        icon: "github",
        link: "https://github.com/brunotbdev/dialecto",
      },
      {
        name: "NPM",
        icon: "npm",
        link: "https://www.npmjs.com/package/dialecto",
      },
    ],
    background: "linear-gradient(90deg,#B794D6 0%, #90A4DB 100%)",
  },
  {
    id: 3,
    img: "./images/projects/portfolio.webp",
    title: "Portfolio",
    description: "portfolio",
    languages: ["html", "css", "js", "typescript", "react", "git"],
    links: [
      {
        name: "Github",
        icon: "github",
        link: "https://github.com/brunotbdev/portfolio",
      },
    ],
    background: "linear-gradient(90deg,#AC72C4 0%, #823F9E 100%)",
  },
];
