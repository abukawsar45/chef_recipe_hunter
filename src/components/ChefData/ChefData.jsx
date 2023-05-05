import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { FaThumbsUp } from 'react-icons/fa';

import '@smastrom/react-rating/style.css';

const ChefData = ({ chefInfo }) => {


  // console.log(chefInfo);
  const { picture,likes, name, experience, numRecipes,rating_star, chef_image, _id} = chefInfo;
  // console.log(chef_image);



  return (
    <div className='mx-2 md:mx-4  my-2 md:my-4 w-auto card card-compact w-96 bg-base-100 shadow-xl'>
      <div className=''>
        <figure>
          <div className='overflow-hidden h-52'>
            <img src={ chef_image } alt=''
              loading='lazy'
              width='340'
              height='300'
            
            />
          </div>
        </figure>
      </div>
      <div className='card-body'>
        <h2 className='card-title text-4xl font-sans'>{name}</h2>
        <div className='card-actions flex item-end m-2'>
          <div className='items-center gap-2'>
            <div className='avatar'>
              <div className=''>
                <p className='text-xl font-thin'>
                  Experience: {experience} Years
                </p>
                <p className='text-xl font-extrabold'>
                  Total Recipe: {numRecipes}
                </p>
                <div className='flex items-center my-2 '>
                  <>
                    <span className='text-cyan-400'>
                      <FaThumbsUp className='h-5 w-5' />
                    </span>
                    <p className='ml-2 text-xl'>{likes}</p>
                  </>
                </div>
                <div className=' flex items-center'>
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={rating_star}
                    readOnly
                  />
                  <p className='mx-2'> {rating_star}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-right'>
          <Link to={`/alldata/${_id}`} className='btn btn-primary'>
            View Recepe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefData;