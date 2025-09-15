import tableaublanc1 from "../assets/screenshots/tableauBlanc/tableaublanc-1.png";
import tableaublanc2 from "../assets/screenshots/tableauBlanc/tableaublanc-2.png";
import virtukey1 from "../assets/screenshots/virtuKey/virtukey-1.png";
import virtukey2 from "../assets/screenshots/virtuKey/virtukey-2.png";
import cinescope1 from "../assets/screenshots/cineScope/cinescope-1.jpg";
import cinescope2 from "../assets/screenshots/cineScope/cinescope-2.jpg";
import cinescope3 from "../assets/screenshots/cineScope/cinescope-3.png";
import quicky1 from "../assets/screenshots/quicky/quicky-1.png";
import quicky2 from "../assets/screenshots/quicky/quicky-2.png";
import quicky3 from "../assets/screenshots/quicky/quicky-3.png";
import quicky4 from "../assets/screenshots/quicky/quicky-4.png";
import quicky5 from "../assets/screenshots/quicky/quicky-5.png";
import neonrank1 from "../assets/screenshots/neonRank/neonrank-1.png";
import neonrank2 from "../assets/screenshots/neonRank/neonrank-2.png";

export const projects = [
  {
    title: "TaBleau Blanc",
    description: "My very first website, created as a joke to make fun of the missing whiteboard in our classroom.",
    duration: 7,
    role: "Developer",
    teamSize: 1,
    stack: ["HTML", "CSS"],
    screenshots: [tableaublanc1, tableaublanc2],
    github: "https://github.com/Dodeun/solo-rush-html-css",
    demo: "https://dodeun.github.io/solo-rush-html-css/",
  },
  {
    title: "VirtuKey",
    description:
      "A fun, easy-to-use virtual piano with 12 keys, volume control, 4 piano sounds, keyboard shortcuts, and recording.",
    duration: 30,
    role: "Product owner",
    teamSize: 2,
    stack: ["HTML", "CSS", "JavaScript"],
    screenshots: [virtukey1, virtukey2],
    github: "https://github.com/Dodeun/Projet1-PianoVirtuel-Bruno-Jordan",
    demo: "https://dodeun.github.io/Projet1-PianoVirtuel-Bruno-Jordan/",
  },
  {
    title: "Cinéscope",
    description:
      "Search over 1 million movies, explore by genre, view detailed movie information, and  manage a watchlist.",
    duration: 65,
    role: "Developer",
    teamSize: 2,
    stack: ["React", "TypeScript"],
    screenshots: [cinescope1, cinescope2, cinescope3],
    github: "https://github.com/x-keyscore/movie_battle",
    demo: "https://x-keyscore.github.io/movie_battle",
  },
  {
    title: "Quicky",
    description:
      "Share and manage forms. It provides 13 types of question fields to answer the needs of people looking for a fast way to create forms.",
    duration: 90,
    role: "Developer",
    teamSize: 4,
    stack: ["React", "TypeScript", "Express", "MySQL"],
    screenshots: [quicky1, quicky2, quicky3, quicky4, quicky5],
    github: "https://github.com/LaurentKatsesSandalman/Project-3",
    demo: null,
  },
  {
    title: "Neon Rank",
    description:
      "Create your own ranking of your favorite topics and reorder them as you like with this retro wave themed website.",
    duration: 22,
    role: "Developer",
    teamSize: 1,
    stack: ["React", "TypeScript", "Express", "MySQL", "Docker"],
    screenshots: [neonrank1, neonrank2],
    github: "https://github.com/Dodeun/solo-rush",
    demo: null,
  },
  {
    title: "MemoFlip",
    description: "",
    duration: null,
    role: "Product owner",
    teamSize: 5,
    stack: ["React", "TypeScript", "NestJS", "MySQL", "Docker", "Jest", "Cypress"],
    screenshots: [],
    github: "https://github.com/WildCodeSchool/projet_4_cda_flash_card",
    demo: null,
  },
];
