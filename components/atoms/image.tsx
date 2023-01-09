/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  src: string;
  alt: string;
  size: [number, number];
  className?: string;
  label?: string;
};

const Image = ({ src, alt, className, label, size }: Props) => {
  return (
    <div className={className}>
      {label && (
        <p className="z-10 text-xs uppercase absolute bot-0 left-0 bg-black/90 text-white">
          {label}
        </p>
      )}
      <img
        src={src}
        alt={alt}
        width={size[0]}
        height={size[1]}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

Image.defaultProps = {
  className: "",
};

export default Image;
