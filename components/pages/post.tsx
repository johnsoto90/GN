import React, { useEffect, useState } from "react";
import Layout from "../templates/layout";
import { useRouter } from "next/router";
import useLocalStorage from "../../hooks/useLocalStorage";
import { PostType } from "../../types";
import Image from "../atoms/image";
import Video from "../atoms/video";
import useDetectMediaType from "../../hooks/useDetectMediaType";
import List from "../molecules/list";
import TopGames, { ItemType } from "../../mocks/rankings";
import Divider from "../atoms/divider";
import Editor from "../molecules/editor";
import Button from "../atoms/button";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<PostType | null>(null);
  const [posts] = useLocalStorage("posts", []);
  const detectMediaType = useDetectMediaType(post?.media || "");
  const [editMode, setEditMode] = useState(false);

  const parseList = (items: ItemType[]) => {
    return items.map((item) => {
      return {
        text: item.name,
        number: item.players,
        image: item.image,
      };
    });
  };

  useEffect(() => {
    if (posts) {
      if (!id || isNaN(parseInt(id as string))) {
        router.push("/");
        return;
      }
      const post = posts.find(
        (post: PostType) => post.id === parseInt(id as string)
      );
      setPost(post);
    }
  }, [posts, id, router]);

  return (
    <Layout className="bg-black/95">
      <div className="text-white min-h-screen">
        <div className="grid grid-cols-3 gap-4 p-4 max-w-[960px] m-auto">
          {post ? (
            <div className="w-full col-span-2 flex gap-4 p-4 flex-col bg-black/50 rounded-lg h-fit">
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <Divider />
              {detectMediaType === "image" && (
                <Image
                  src={post.media}
                  alt={post.title}
                  size={[1280, 720]}
                  className="w-full rounded-lg overflow-hidden"
                />
              )}
              {detectMediaType === "youtube" && (
                <Video src={post.media} className="w-full" />
              )}
              <div
                className="flex flex-col gap-4"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              <Button
                onClick={() => setEditMode(!editMode)}
                className="border border-white"
              >
                {editMode ? "Close Editor" : "Edit Post"}
              </Button>
              {editMode && (
                <Editor id={post?.id} />
              )}
            </div>
          ) : (
            <div className="w-full">
              <h1>Post not found</h1>
            </div>
          )}
          <div className="w-full col-span-1 flex gap-4 p-4 flex-col bg-black/50 rounded-lg">
            <h1 className="text-xl">Most Played MMOS</h1>
            <Divider />
            <List
              items={parseList(TopGames.slice(0, 5))}
              className="flex  flex-col gap-4"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
