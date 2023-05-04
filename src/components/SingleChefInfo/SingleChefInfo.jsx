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
      <div className='col-span-12 md:col-span-3 card lg:card-side bg-base-100 shadow-xl md:order-2'>
        <div className=''>
          <div className='sticky top-0'>
          <h3 className='my-2 mx-2 font-bold text-4xl'>{ chef_name }</h3>
            <img src={chef_image} alt='Album' />
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-12 md:col-span-9'>
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