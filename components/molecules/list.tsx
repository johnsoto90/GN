import React from "react";
import Image from "../atoms/image";

type ListProps = {
  className?: string;
  items: ItemType[];
};
type ItemType = {
  text: string;
  number?: number;
  image?: string;
};
const List = ({ items, className }: ListProps) => (
  <ul className={className}>
    {items.map((item, index) => (
      <li key={index}>
        {`#${index + 1} ${item.text}`}
        {item.image && (
          <Image src={item.image} alt={item.text} size={[32, 32]} className="overflow-hidden rounded-lg"/>
        )}
      </li>
    ))}
  </ul>
);

export default List;
