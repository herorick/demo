import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
  return posts.map((post) => {
    return (
      <div key={post.id} className="post-preview">
        <Link href={`/post/${post.id}`}>
          <h2 className="post-title">
            {post.title}
          </h2>
          <h3 className="post-subtitle">
            Problems look mighty small from 150 miles up
          </h3>
        </Link>
        <p className="post-meta">
          Posted by <a href="#">Start Bootstrap</a> on September 24, 2014
        </p>
      </div>
    );
  });
  return <div>Post</div>;
};

export default Posts;
