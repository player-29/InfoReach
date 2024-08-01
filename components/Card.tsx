import React from 'react';

type CardProps = {
  title: string;
  description: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="text-blue-600 hover:text-blue-800">Read more</a>
      </div>
    </div>
  );
};

export default Card;
