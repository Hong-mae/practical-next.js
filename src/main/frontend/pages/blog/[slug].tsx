import React from "react";
import PostHead from "@/components/PostHead";
import posts from "@/data/posts";

interface SSP {
  params: any;
}

interface Props {
  post: any;
}

export const getServerSideProps = ({ params }: SSP) => {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
};

export default Post;
