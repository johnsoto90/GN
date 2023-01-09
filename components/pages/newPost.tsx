import React from "react";
import Divider from "../atoms/divider";
import Create from "../molecules/create";
import Layout from "../templates/layout";

const NewPost = () => {
  return (
    <Layout className="bg-black/95">
      <div className="text-white min-h-screen p-4">
        <div className="gap-4 p-4 max-w-[960px] m-auto bg-black/50 rounded-lg">
          <h1 className="font-bold text-xl mb-4">Create new Post</h1>
          <Divider />
          <Create />
        </div>
      </div>
    </Layout>
  );
};

export default NewPost;
