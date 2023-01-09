/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import Layout from "../templates/layout";
import useLocalStorage from "../../hooks/useLocalStorage";
import useDetectMediaType from "../../hooks/useDetectMediaType";
import { PostType } from "../../types";
import { useRouter } from "next/router";
import Image from "../atoms/image";
import Video from "../atoms/video";
import Button from "../atoms/button";
import Divider from "../atoms/divider";

const Media = ({ media, className }: { media: string; className: string }) => {
  const detectMedia = useDetectMediaType(media);

  if (detectMedia === "image")
    return (
      <Image src={media} size={[10, 10]} alt={media} className={className} />
    );
  if (detectMedia === "youtube")
    return <Video src={media} className={className} />;

  return <div>Not supported</div>;
};

const Blog = () => {
  const [posts] = useLocalStorage("posts", []);
  const router = useRouter();
  const { search } = router.query;
  const filteredPosts = () => {
    if (search) {
      const regex = new RegExp(`\\b${search}`, "i");
      return posts.filter((post: PostType) => {
        return post.title.match(regex) || post.body.match(regex);
      });
    } else return posts;
  };

  return (
    <Layout className="bg-black/95">
      <div className="text-white min-h-screen p-4">
        <div className="flex flex-col gap-4 p-4 max-w-[960px] m-auto bg-black/50 rounded-lg">
          {filteredPosts().length === 0 && (
            <div className="flex flex-col items-center gap-4">
              <div className="text-xl font-bold">
                Nothing posts found for "{search}" 😔
              </div>
            </div>
          )}
          {filteredPosts().map((post: PostType) => {
            return (
              <>
                <div
                  key={post.id}
                  className="grid grid-cols-2 rounded-lg gap-4"
                >
                  <Media
                    media={post.media}
                    className="object-fit overflow-hidden rounded-lg"
                  />
                  <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold">{post.title}</h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${post.body.slice(0, 250)}...`,
                      }}
                    />
                    <Button
                      className="self-end bg-yellow-300 text-black"
                      onClick={() => {
                        router.push(`/post?id=${post.id}`);
                      }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <Divider />
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
