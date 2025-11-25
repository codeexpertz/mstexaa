import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  const base64Image = post.featured_image?.data?.toString("base64");
  return (
    <div>
      <div>
        <div className={styles.top}>
          {post.featured_image?.data && (
            <div className={styles.imgContainer}>
              <Image
                src={`data:${post.featured_image.contentType};base64,${base64Image}`}
                alt={post.featured_image.name || "Post image"}
                fill
                className={styles.img}
              />
            </div>
          )}
          <span className={styles.date}>
            {new Date(post.publish_date).toDateString().slice(4, 16)}
          </span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <Link className={styles.link} href={`/blog/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
