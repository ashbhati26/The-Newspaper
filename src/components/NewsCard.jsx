import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-[#cac2be] p-4 rounded-lg shadow-md break-inside-avoid mb-6 text-[#1c1b19]">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="text-[#1c1b19] mt-2">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e63946] mt-4 block"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
