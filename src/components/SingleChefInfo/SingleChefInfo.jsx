import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodDetails from '../Food/FoodDetails';

const SingleChefInfo = () => {
  const { chefId } = useParams();
  // console.log('oooo', chefId);
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  const {chef_name, chef_image, foods} = chefDetails;


  return (
    <div className='grid grid-cols-12 relative'>
      <div className='col-span-12 card lg:card-side bg-base-100 shadow-xl'>
        <div className=''>
          
        </div>
      </div>
      <div className='col-span-12'>
        <div>
          {foods.map(food => (
            <FoodDetails key={food._id} food={food}></FoodDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleChefInfo;