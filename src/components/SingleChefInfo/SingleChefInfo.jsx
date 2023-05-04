import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodDetails from '../Food/FoodDetails';

const SingleChefInfo = () => {
  const { chefId } = useParams();
  console.log('oooo', chefId);
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  const {chef_name, chef_image, foods} = chefDetails;


  return (
    <div className='grid grid-cols-12'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <h3>Chef details</h3>
        <figure>
          <img
            src='/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
            alt='Album'
          />
        </figure>
      </div>
      <div className='card-body'>
          <div className='card-actions justify-end'>
            {
              foods.map((food) =>
              <FoodDetails key={food._id} food={food}></FoodDetails>
              )
            }
          </div>
        </div>
    </div>
  );
};

export default SingleChefInfo;