import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodDetails from '../Food/FoodDetails';
import { FaThumbsUp } from 'react-icons/fa';

const SingleChefInfo = () => {
  const { chefId } = useParams();
  
  const chefDetails = useLoaderData();
 
  const {chef_name,bio, chef_image,likes,experience,numRecipes, foods} = chefDetails;


  return (
    <div className='grid grid-cols-12 relative'>
      <div className='col-span-12 card lg:card-side bg-fuchsia-300 shadow-xl'>
        <div className='w-full md:w-6/12'>
          <img src={chef_image} alt='' />
        </div>
        <div className='w-full md:w-6/12 my-2 md:my-4'>
          <h2 className='text-8xl font-serif my-2 md:my-4 text-purple-600'>
            {chef_name}
          </h2>
          <p>
            <span className='text-stone-900 font-mono'>BIO: {bio}</span>
          </p>
          <div className='flex items-center mt-2 md:mt-4 gap-2'>
            <span className='text-cyan-400'>
              <FaThumbsUp className='h-5 w-5' />
            </span>
            <p className='ml-2 text-xl'>{likes}</p>
          </div>
          <div className=''>
            <p className='text-4xl my-2 font-thin'>
              Experience: {experience} Years
            </p>
            <p className='text-4xl font-normal'>Total Recipe: {numRecipes}</p>
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        {foods.map(food => (
          <FoodDetails key={food._id} food={food}></FoodDetails>
        ))}
      </div>
    </div>
  );
};

export default SingleChefInfo;