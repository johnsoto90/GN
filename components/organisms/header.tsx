import React from "react";
import Link from "next/link";
import Navigation from "../molecules/navigation";
import SearchBar from "../molecules/searchBar";
import Logo from "../atoms/logo";
import Button from "../atoms/button";

const Header = () => {
  return (
    <header className="bg-black/50 p-4">
      <div className="flex items-center justify-between max-w-[960px] m-auto px-4">
        <div className="flex items-center">
          <Logo />
          <Navigation
            className="flex gap-2 text-gray-500"
            items={["Home", "About", "Blog", "Contact"]}
          />
        </div>
        <div className="flex gap-2">
          <SearchBar className="ml-4" />
          <Link href="/create">
            <Button className="bg-white/5 hover:bg-white/10 text-white">
              New Post
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
