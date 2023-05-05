import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefData from '../ChefData/ChefData';
import { Typewriter } from 'react-simple-typewriter';
import ImageCarousel from '../Carousel/ImageCarousel';


const Home = () => {

  const chefsData = useLoaderData();
  const chefs = chefsData.chefs;


  return (
    <div className='my-8 '>
      <div className='bg-lime-200 px-4 flex flex-col md:flex-row items-center justify-center'>
        <h3 className='py-2 w-6/12 font-bold text-2xl md:text-6xl text-sky-500 text-center'>
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Khichuri', 'Bhorta', 'Misty', 'Kacha-Golla!', 'Chom-Chom']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              
            />
          </span>
        </h3>
        <div className='w-full md:w-6/12 '>
          <img
            className='w-full'
            src='data:image/jpeg;base64,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'
            alt=''
          />
        </div>
      </div>
      <div>
       <ImageCarousel></ImageCarousel>
      </div>
      <div></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {chefs.map(chefInfo => (
          <ChefData key={chefInfo._id} chefInfo={chefInfo}></ChefData>
        ))}
      </div>
    </div>
  );
};

export default Home;