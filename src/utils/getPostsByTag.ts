import { slufigyAll } from "./slugify";

import type { Post } from "../lib/contentful";

const getPostsByTag = (posts: Post[], tag: string) =>
  posts.filter((post) => slufigyAll(post.fields.tags).includes(tag));

export default getPostsByTag;
