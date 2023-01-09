import React from "react";

type Props = {
  title: string;
  text: string;
  className?: string;
};

const TextBlock: React.FC<Props> = ({ title, text, className }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

TextBlock.defaultProps = {
  className: "",
};

export default TextBlock;
