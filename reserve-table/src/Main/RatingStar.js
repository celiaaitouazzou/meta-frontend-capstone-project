import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons

function RatingStar({ stars }) {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starArray = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starArray.push(<FaStar key={`full-${i}`} className="star full-star" />);
    }

    // Add half star
    if (hasHalfStar) {
        starArray.push(<FaStarHalfAlt key="half" className="star half-star" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starArray.push(<FaRegStar key={`empty-${i}`} className="star empty-star" />);
    }

    return <div className="rating-stars">{starArray}</div>;
}

export default RatingStar;