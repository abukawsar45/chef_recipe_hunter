import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
// import { FaBeer, FaRegThumbsUp } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css';
import 'react-notifications-component/dist/theme.css';

const FoodDetails = ({ food }) => {
  const [active, setActive] = useState(false);
  const handleFavouriteIcon = () => {
    toast('Add to favourite list!');
     setActive(true);
  };

  console.log(food);
  console.log(food.Ingredients);
  const { food_name, food_image, details, ratings } = food;
  return (
    <div className='my-2 md:my-4'>
      <ToastContainer />
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title text-2xl text-indigo-500'>
            Recipe Name:{food_name}
          </h2>
          <div className='grid gap-2 md:gap-6 grid-cols-1 md:grid-cols-2'>
            <div className=''>
              <img
                className='md:h-96 w-full  rounded-lg'
                src={food_image}
                alt=''
              />
            </div>
            <div className=''>
              <div>
                <h2 className='text-xl text-green-400'>Ingredients: </h2>
                {food.Ingredients.map((method, index) => (
                  <li className='font-thin' key={index}>
                    {method}
                  </li>
                ))}
              </div>
              <div>
                <h2 className='text-xl text-green-400'>Cooking Method:</h2>
                {food.cooking_method.map((method, index) => (
                  <li className='font-thin' key={method}>
                    {method}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <p className='rounded-lg'>{details}</p>
          <div className='card-actions justify-between items-center'>
            <div className='flex items-center gap-6'>
              <div className=' flex items-center'>
                <Rating style={{ maxWidth: 150 }} value={ratings} readOnly />
                <p className='mx-2'> {ratings}</p>
              </div>
            </div>
            <button
              className='btn btn-primary'
              onClick={handleFavouriteIcon}
              disabled={active}
            >
              Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
