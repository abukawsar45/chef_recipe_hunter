import React from 'react';
import { Link } from 'react-router-dom';

const ChefData = ({ chefInfo }) => {
  console.log(chefInfo);
  const { picture, name, experience, numRecipes, _id} = chefInfo;

  return (
    <div className='mx-2 md:mx-4 my-2 md:my-4 w-auto'>
      <h1>Chef data</h1>
      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <div className='overflow-hidden h-52'>
            <img src={picture} alt='Shoes' />
          </div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <Link to={`/alldata/:${_id}`} className='btn btn-primary'>
              View Recepe
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ChefData;