import React from "react";

const ResultBlock = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div>
          <p>{text}</p>
        </div>
    </a>
  );
};

export default ResultBlock;
