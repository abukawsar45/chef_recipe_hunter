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
  }
  

  console.log(food);
  console.log(food.Ingredients);
  const { food_name, food_image, details,ratings } = food;
  return (
    <div className='my-2 md:my-4'>
      <ToastContainer />
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title font-mono text-indigo-500'>
            Recipe Name : {food_name}
          </h2>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6'>
            <div className='col-span-12 w-6/12 md:col-span-6'>
              <img
                className='h-32 md:h-96 w-full rounded-lg'
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
          <p className='rounded-lg'>{details}</p>
          <div className='card-actions justify-between'>
            <div className='flex items-center gap-6'>
              <div className=' flex items-center'>
                <Rating style={{ maxWidth: 150 }} value={ratings} readOnly />
                <p className='mx-2'> {ratings}</p>
              </div>
              <div className='flex flex-col items-center'>
                <span>
                  <FaStar
                    onClick={handleFavouriteIcon}
                    className='h-5 w-5 text-black hover:text-lime-400'
                  />
                </span>
                <div>
                  <h4>Favourites</h4>
                </div>
              </div>
            </div>
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