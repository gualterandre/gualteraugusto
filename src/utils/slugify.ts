import { slug as slugger } from "github-slugger";

import type { Post } from "../lib/contentful";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (entry: Post["fields"]) => entry.slug ? slugger(entry.slug) : slugger(entry.title);

export const slufigyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
