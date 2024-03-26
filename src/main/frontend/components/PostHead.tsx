import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

const PostHead = ({ title, subtitle, image }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={subtitle} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={subtitle} />
      <meta property="og:image" content={image} />

      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={subtitle} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default PostHead;
