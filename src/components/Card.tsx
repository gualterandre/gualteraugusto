import Datetime from "./Datetime";

import type { Post } from "../lib/contentful";

export interface Props {
  href?: string;
  post: Post["fields"];
  secHeading?: boolean;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-lg decoration-dashed hover:underline",
};

export default function Card({ href, post, secHeading = true }: Props) {
  return (
    <li className={styles.cardContainer}>
      <a href={href} className={styles.titleLink}>
        {secHeading ? (
          <h2 className={styles.titleHeading}>{post.title}</h2>
        ) : (
          <h3 className={styles.titleHeading}>{post.title}</h3>
        )}
      </a>
      <Datetime datetime={post.date} />
      <p>{post.description}</p>
    </li>
  );
}
