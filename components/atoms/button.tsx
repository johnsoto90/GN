import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({
  children,
  href,
  onClick,
  className,
  type,
}) => {
  const variant =
    className === "" ? "bg-blue-500 text-white hover:bg-blue-600" : className;
  if (href) {
    return (
      <Link href={href} className={`px-4 py-2 font-bold uppercase ${variant}`}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        type={type || "button"}
        className={`px-4 py-2 font-bold uppercase ${variant}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
