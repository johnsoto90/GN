import React from "react";
import Image from "../atoms/image";
import PostThumbnail from "../organisms/postThumbnail";

type Props = {
  className?: string;
  posts?: PostType[];
};

type PostType = {
  id: number;
  title: string;
  body: string;
  date: string;
  media: string;
};

const PostGrid = ({ className, posts }: Props) => {
  return (
    <div className={`${className}`}>
      {posts?.map((post, index) => (
        <PostThumbnail
          key={index}
          trim={100}
          post={post}
          styles={{
            container: "text-white flex flex-col-reverse",
            image: "w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden",
          }}
        />
      ))}
    </div>
  );
};
export default PostGrid;
