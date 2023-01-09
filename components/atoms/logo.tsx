import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="mr-4">
      <Link href="/">
        <h1 className="font-bold text-white uppercase text-4xl">GN</h1>
      </Link>
    </div>
  );
};

export default Logo;
