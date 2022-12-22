import { slugifyStr } from "./slugify";
// import type { MarkdownInstance } from "astro";
// import type { Frontmatter } from "../types";
import type { Post } from "../lib/contentful";

const getUniqueTags = (posts: Post[]) => {
  let tags: string[] = [];
  posts.forEach((post: any) => {
    tags = [...tags, ...post.fields.tags]
      .map(tag => slugifyStr(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return tags;
};

export default getUniqueTags;
