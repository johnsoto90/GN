import React, { useEffect, useState } from "react";
import Hero from "../organisms/hero";
import PostGrid from "../organisms/postGrid";
import PostThumbnail from "../organisms/postThumbnail";
import Layout from "../templates/layout";
import Posts from "../../mocks/posts";
import TopGames from "../../mocks/rankings";
import useLocalStorage from "../../hooks/useLocalStorage";
import List from "../molecules/list";
import { ItemType } from "../../mocks/rankings";
import Divider from "../atoms/divider";
import { PostType } from "../../types";

const Landing = () => {
  const [posts] = useLocalStorage("posts", Posts);


  const parseList = (items: ItemType[]) => {
    return items.map((item) => {
      return {
        text: item.name,
        number: item.players,
        image: item.image,
      };
    });
  };

  return (
    <Layout className="bg-black/95">
      <Hero
        className="h-[400px]"
        title="Stay Up-To-Date on the Latest Gaming News with Our Website"
        text="Our website is your go-to source for all the latest and greatest gaming news and updates - don't miss out on a single beat!"
        imgUrl="https://cdn.discordapp.com/attachments/1053861251043819552/1061385810051600454/John_Soto_gamer_streamer_playing_on_his_pc_setup_dynamic_lighti_a6ffea98-a547-4825-a9b7-3ac588d2d6b4.png"
      />
      <div className="flex flex-col md:flex-row gap-4 p-4 max-w-[960px] m-auto">
        <div className="w-full">
          <PostThumbnail
            trim={500}
            post={posts[0]}
            styles={{
              container:
                "w-full flex flex-col-reverse gap-4 text-white p-4 bg-black/50 rounded-lg",
            }}
          />
          <PostGrid
            className="grid grid-cols-2 items-start gap-4 p-4 bg-black/50 mt-4 rounded-lg"
            posts={posts.slice(2)}
          />
        </div>

        <div className="w-full md:w-2/3">
          <PostThumbnail
            trim={50}
            post={posts[1]}
            styles={{
              container:
                "w-full flex items-center flex-col-reverse gap-4 text-white bg-black/50 p-4 rounded-lg",
              image: "w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden",
            }}
          />
          <div className="mt-4 text-white w-full col-span-1 flex gap-4 p-4 flex-col bg-black/50 rounded-lg">
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

export default Landing;
