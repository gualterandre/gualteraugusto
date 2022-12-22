import { SITE } from "src/config";
import rss from "@astrojs/rss";
import slugify from "@utils/slugify";

import { contentfulClient } from "../lib/contentful";
import type { Post } from "../lib/contentful";

const entries: {
  items: Post[];
} = await contentfulClient.getEntries({
  content_type: "post",
});

const posts = entries.items;

export const get = () =>
  rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts
      .map((post) => ({
        link: `posts/${slugify(post.fields)}`,
        title: post.fields.title,
        description: post.fields.description,
        pubDate: new Date(post.fields.date),
      })),
  });
