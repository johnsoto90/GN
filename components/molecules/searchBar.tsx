import React, { useState, FC, ChangeEvent } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { PostType } from "../../types";
import Button from "../atoms/button";
import Input from "../atoms/input";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

type SuggestionType = {
  title: string;
  id: string;
};

const SearchBar = ({ className }: Props) => {
  const [query, setQuery] = useState("");
  const [posts] = useLocalStorage("posts", []);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const router = useRouter();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (query.length > 1) {
      const suggestions = posts
        .filter((post: PostType) => {
          const regex = new RegExp(`\\b${query}`, "i");
          return post.title.match(regex) || post.body.match(regex);
        })
        .map((post: PostType) => ({ title: post.title, id: post.id }));
      setSuggestions(suggestions);
    } else setSuggestions([]);
    setQuery(event.target.value);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      router.push(`/blog?search=${query}`);
      setQuery("");
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    router.push(`/blog?search=${query}`);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className={`flex items-center ${className}`}>
      {suggestions.length > 0 && (
        <div className="absolute bg-white top-[60px]">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                router.push(`/post?id=${suggestion.id}`);
                setQuery("");
                setSuggestions([]);
              }}
            >
              {`${suggestion.title.slice(0, 50)}...`}
            </div>
          ))}
        </div>
      )}
      <Input
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="bg-gray-100"
        placeholder="Enter your query here..."
      />
      <Button
        onClick={handleSearch}
        className="bg-red-600 hover:bg-red-400 text-white"
      >
        Search
      </Button>
    </div>
  );
};

SearchBar.defaultProps = {
  className: "",
};

export default SearchBar;
