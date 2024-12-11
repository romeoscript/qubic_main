import React from 'react';
import hexagon1 from "../assets/home/hexagon.svg";
import hexagon2 from "../assets/home/hexagon2.svg";

interface HexagonCardProps {
    className: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ className }) => {
    return (
        <div className={`absolute ${className} md:h-[300px] h-30 w-30 md:w-[300px] flex items-center justify-center`}>
            <img
                src={hexagon2}
                alt=""
                className="absolute max-md:h-100  max-md:w-20 "
            />
            <img
                src={hexagon1}
                alt=""
                className="absolute max-md:h-20  max-md:w-20 "
            />
        </div>
    );
};

export default HexagonCard;