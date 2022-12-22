import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (entry: any) => entry.slug ? slugger(entry.slug) : slugger(entry.title);

export const slufigyAll = (arr: String[]) => arr.map(str => slugifyStr(str));

export default slugify;
