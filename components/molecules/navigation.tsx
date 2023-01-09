import React, { FC } from "react";
import Link from "next/link";

type Props = {
  className?: string;
  items?: string[];
};

const Navigation: FC<Props> = ({ className, items }) => {
  return (
    <nav className={`${className}`}>
      {items?.map((item, index) => (
        <Link
          className="uppercase text-sm"
          key={index}
          href={`/${item === "Home" ? "" : item.toLowerCase()}`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

Navigation.defaultProps = {
  className: "",
  items: ["Home", "About", "Contact"],
};

export default Navigation;
