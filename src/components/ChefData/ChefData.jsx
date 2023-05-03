import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ChefData = ({ chefInfo }) => {


  // console.log(chefInfo);
  const { picture, name, experience, numRecipes,rating_star, chef_image, _id} = chefInfo;
  // console.log(chef_image);



  return (
    <div className='mx-2 md:mx-4 my-2 md:my-4 w-auto'>
      <h1>{ }</h1>
      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <div className='overflow-hidden h-52'>
            <img src={chef_image} alt='Shoes' />
          </div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions flex justify-between m-2'>
            <div className='flex items-center gap-2'>
              <div className='avatar'>
                <div className='w-12 rounded-full'>
                  <img src={chef_image} />
                </div>
              </div>
              <p>{rating_star}</p>
            </div>
            <Link to={`/alldata/${_id}`} className='btn btn-primary'>
              View Recepe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefData;