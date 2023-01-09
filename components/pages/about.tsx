/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Layout from "../templates/layout";
import Image from "../atoms/image";

const About = () => {
  return (
    <Layout className="bg-black/95">
      <div className="text-white min-h-screen p-4">
        <div className="gap-4 p-4 max-w-[960px] m-auto bg-black/50 rounded-lg grid grid-cols-3">
          <Image
            src="https://cdn.pixabay.com/photo/2022/01/06/23/03/game-boy-6920443_960_720.jpg"
            alt="Game Boy"
            size={[10, 10]}
            className="rounded-lg overflow-hidden w-full"
          />
          <div className="col-span-2">
            <h1 className="font-bold text-xl mb-4">Our Mision</h1>
            <p>
              At GamingNews, it is our mission to provide our readers with the
              most up-to-date and accurate information about the video game
              industry. Our team of dedicated writers and editors works
              tirelessly to bring you the latest news on game releases,
              developer interviews, and industry events. We strive to be a go-to
              resource for all things gaming, offering in-depth reviews of the
              hottest new titles as well as coverage of classic games that have
              stood the test of time. In addition to our news and review
              content, we also provide a platform for gamers to connect and
              discuss their favorite games, share tips and strategies, and stay
              up-to-date on the latest trends and happenings in the world of
              gaming. Whether you're a casual gamer or a hardcore enthusiast, we
              hope to be your one-stop destination for all things gaming.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
