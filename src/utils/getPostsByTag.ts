import { slufigyAll } from "./slugify";
import type { MarkdownInstance } from "astro";
// import type { Frontmatter } from "../types";
import type { Post } from "../lib/contentful";

const getPostsByTag = (posts: Post[], tag: string) =>
  posts.filter((post) => slufigyAll(post.fields.tags).includes(tag));

export default getPostsByTag;
