import { getPost } from "@/lib/data";
import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { headers } from "next/headers";
import axios from "axios";
const getData = async (slug) => {
  const headerList = headers();
  const fullUrl = headerList.get("x-full-url");

  // Use the full URL as needed
  console.log(fullUrl);
  const res = await axios.get(`${fullUrl}/api/blog/${slug}`);

  // if (!res.ok) {
  //   throw new Error("Something went wrong");
  // }

  return res.data;
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post?.title ?? "Untitled",
    description: post?.desc ?? "No description available",
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      {post.featured_image?.data && (
        <div className={styles.imgContainer}>
          <Image
            src={`data:${post.featured_image.contentType};base64,${post.featured_image.data}`}
            alt={post.featured_image.name || post.title || "Image"}
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title ?? "Untitled"}</h1>
        <div className={styles.detail}>
          {post.userId && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt
                ? new Date(post.createdAt).toDateString().slice(4, 16)
                : "Unknown"}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc ?? "No description available"}
        </div>
        <div className={styles.additionalDetails}>
          {/* <p>
            <strong>Slug:</strong> {post.slug ?? "N/A"}
          </p>
          <p>
            <strong>Head:</strong> {post.head ?? "N/A"}
          </p> */}
          {/* <p>
            <strong>View Count:</strong> {post.view_count ?? "N/A"}
          </p>
          <p>
            <strong>Tags:</strong> {post.tags ?? "N/A"}
          </p>
          <p>
            <strong>Is Published:</strong> {post.is_published ?? "N/A"}
          </p>
          <p>
            <strong>Publish Date:</strong> {post.publish_date ?? "N/A"}
          </p> */}
         
          {/* <p>
            <strong>Excerpt:</strong> {post.excerpt ?? "N/A"}
          </p> */}
          <p>
            {post.content ?? "N/A"}
          </p>
          <p className=" mt-4">
            <strong>Author:</strong> {post.author ?? "N/A"}
          </p>
          {/* <p>
            <strong>Read Time:</strong> {post.read_time ?? "N/A"}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
