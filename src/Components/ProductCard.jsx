
import React from 'react'
import { FaDollarSign } from 'react-icons/fa'

const ProductCard = ({ cardData }) => {
    return (
        <div className='py-10 px-2 w-[30%] m-auto border border-gray-600'>
            <img className='' src={cardData.image} />
            <h2 className='text-[30px] font-bold'>{cardData.name}</h2>
            <p className='flex'><FaDollarSign /> <span>{cardData.price}</span></p>
            <button className={`${cardData.inStock ? 'bg-blue-400' : 'bg-red-600'} p-3 `}>{cardData.inStock ? 'Add to cart' : 'Out of Stock'}</button>
        </div>
    )
}

export default ProductCard