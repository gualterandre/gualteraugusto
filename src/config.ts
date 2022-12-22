import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Gualter Augusto",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Augusto Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/gualterandre",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@gualteraugusto.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gualteraugusto",
    linkTitle: `${SITE.author} on Twitter`,
    active: false,
  },
];
