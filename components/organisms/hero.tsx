import React, { FC } from "react";
import TextBlock from "../molecules/textBlock";
import Button from "../atoms/button";

type Props = {
  title: string;
  text: string;
  imgUrl: string;
  className?: string;
};

const Hero: FC<Props> = ({ title, text, imgUrl, className }) => {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-full m-auto items-center text-white bg-black/50 justify-center">
        <div>
          <TextBlock title={title} text={text} className="max-w-[500px]" />
          <Button className="mt-4 bg-yellow-300 text-black">
            Subscribe now
          </Button>
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  className: "",
};

export default Hero;
