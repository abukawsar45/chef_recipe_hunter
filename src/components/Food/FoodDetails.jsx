import React, { useState } from 'react';

const FoodDetails = ({ food }) => {
  const [active, setActive] = useState(false)

  console.log(food);
  const { food_name, food_image, details } = food;
  return (
    <div className='my-2 md:my-4'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>

        <div className='card-body'>
          <h2 className='card-title'>{food_name}</h2>
          <div>
            <img className='h-50 w-full rounded-lg' src={food_image} alt='' />
          </div>
          <p className='rounded-lg'>{details}</p>
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