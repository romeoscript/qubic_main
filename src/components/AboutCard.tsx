import React, { useState } from 'react';
import heroSvg from "../assets/home/goas.svg";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg h-[300px] md:h-[400px] w-full mx-auto relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroSvg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute bottom-0 left-0 h-full flex items-end w-full bg-gradient-to-t from-[rgba(0,37,113,0.8)] to-transparent text-white p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out ${
          showDescription
            ? 'translate-y-0 opacity-70'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-white text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;