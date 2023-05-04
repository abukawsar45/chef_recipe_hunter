import React, { useState } from 'react';

const FoodDetails = ({ food }) => {
  const [active, setActive] = useState(false)

  console.log(food);
  const { food_name, food_image, details } = food;
  return (
    <div className='bg-green-300'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <img
            src='/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
            alt='Album'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{food_name}</h2>
          <div>
            <img className='h-50 w-50 rounded-lg' src={food_image} alt='' />
          </div>
          <p>{details}</p>
          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary'
              onClick={() => setActive(true)}
              disabled={active}
            >
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;