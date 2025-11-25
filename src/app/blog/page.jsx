import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { headers } from "next/headers";
import axios from "axios";
import { getPosts } from "@/lib/data";

const getData = async (url) => {
  const res = await getPosts();
  // console.log("restHete", res);
  return res;
};

const BlogPage = async () => {
  const headerList = headers();
  // const fullUrl = headerList.get("x-full-url");

  // // Use the full URL as needed
  // console.log(fullUrl);
  const posts = await getData();

  return (
   <>
    <div className="w-full lg:px-28 flex-col items-start min-h-screen py-28 px-6">
    <div  className="w-full flex gap-20 flex-wrap items-start justify-start min-h-screen ">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div className={styles.noPosts}>There are no posts</div>
      )}
    </div>
    </div>
   
   </>
  );
};


export default BlogPage;
