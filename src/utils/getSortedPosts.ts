// import type { MarkdownInstance } from "astro";
// import type { Frontmatter } from "../types";

import type { Post } from "../lib/contentful";

const getSortedPosts = (posts: Post[]) =>
  posts
    .sort(
      (a: Post,b: Post) =>
        Math.floor(new Date(b.fields.date).getTime() / 1000) -
        Math.floor(new Date(a.fields.date).getTime() / 1000)
    );

export default getSortedPosts;
