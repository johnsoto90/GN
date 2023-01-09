import React, { useState } from "react";
import Input from "../atoms/input";
import { PostType } from "../../types";
import Button from "../atoms/button";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useRouter } from "next/router";

const Create = () => {
  const [posts, setPosts] = useLocalStorage("posts", []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");
  const router = useRouter();

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };
  const handleBody = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBody(e.target.value);
  };
  const handleMedia = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMedia(e.target.value);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSave = () => {
    const lastId = posts[posts.length - 1].id + 1;
    const newPost: PostType = {
      id: lastId,
      title: title,
      body: body,
      media: media,
      date: formatDate(new Date()),
    };
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full text-black rounded-sm"
        value={title}
        onChange={handleTitle}
      />
      <Input
        type="text"
        name="media"
        value={media}
        placeholder="Media"
        className="w-full text-black rounded-sm"
        onChange={handleMedia}
      />
      <Input
        type="textarea"
        name="content"
        placeholder="Content"
        value={body}
        className="w-full text-black rounded-sm"
        onChange={handleBody}
      />
      <div className="flex gap-4 self-end">
        <Button className="bg-yellow-300 text-black" onClick={handleSave}>
          Publish Post
        </Button>
      </div>
    </div>
  );
};

export default Create;
