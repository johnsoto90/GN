import React, { useEffect, useState } from "react";
import TextBlock from "../molecules/textBlock";
import Video from "../atoms/video";
import Image from "../atoms/image";
import Link from "next/link";
import useDetectMediaType from "../../hooks/useDetectMediaType";
import { PostType } from "../../types";

type StylesType = {
  container?: string;
  image?: string;
  video?: string;
};

type Props = {
  post: PostType;
  styles?: StylesType;
  trim: number;
};

const PostThumbnail = ({
  post: { id, title, body, date, media },
  styles,
  trim,
}: Props) => {
  const [trimDesc, setTrimDesc] = useState<string>(body);
  const detectMediaType = useDetectMediaType(media);

  useEffect(() => {
    if (body.length > trim) {
      setTrimDesc(body.substring(0, trim) + "...");
    }
  }, [body, trim, media]);

  return (
    <Link href={`/post?id=${id}`}>
      <div className={`${styles?.container}`}>
        <div className="flex flex-col gap-4">
          <TextBlock title={title} text={trimDesc} />
          <Link href={`/post?id=${id}`} className="text-yellow-500 underline">
            Read More
          </Link>
        </div>
        {detectMediaType === "image" && (
          <Image
            src={media}
            alt={title}
            size={[1280, 720]}
            className={styles?.image}
          />
        )}
        {detectMediaType === "youtube" && (
          <Video src={media} className={styles?.video} />
        )}
        {detectMediaType === null && (
          <h1 className="text-white text-2xl">Loading...</h1>
        )}
      </div>
    </Link>
  );
};

export default PostThumbnail;
