
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
    const [isFilled, setIsFilled] = useState(false);
    const [count, setCount] = useState(0); // Initialize count at 0

    const toggleHeart = () => {
        setIsFilled(!isFilled);
        setCount(prevCount => prevCount === 0 ? 1 : 0)
    };

    return (
        <div className='py-10 px-2 mx-auto my-5 bg-green-200 w-[50%] '>
            <button onClick={toggleHeart} className="heart-button">
                <FaHeart className={isFilled ? 'text-red-600' : 'text-gray-400'} />
            </button>
            <div>
                Count :- {count}
            </div>
        </div>
    )
}

export default LikeButton