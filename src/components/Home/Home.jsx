import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefData from '../ChefData/ChefData';

const Home = () => {

  const chefsData = useLoaderData();
  console.log(chefsData);
  const chefs = chefsData.chefs


  return (
    <div className='my-8 '>
      <h3>Available For BANGLADESH</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {chefs.map(chefInfo => (
          <ChefData key={chefInfo._id} chefInfo={chefInfo}></ChefData>
        ))}
      </div>
    </div>
  );
};

export default Home;