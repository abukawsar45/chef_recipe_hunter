import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefData from '../ChefData/ChefData';
import { AutoPlay } from '@egjs/flicking-plugins';

// import flicking, { MoveEvent, WillChangeEvent } from '@egjs/react-flicking';

// flicking.addPlugins(
  // new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false })
// );


const Home = () => {

  const chefsData = useLoaderData();
  console.log(chefsData);
  const chefs = chefsData.chefs


  return (
    <div className='my-8 '>
      <div className='bg-lime-200 px-4 flex flex-col md:flex-row items-center justify-center'>
        <h3 className='py-2 w-6/12 font-bold text-2xl md:text-8xl text-sky-500 text-center'>
          Available For BANGLADESH
        </h3>
        <div className='w-6/12'>
          <img
            className='h-50 w-50'
            src='https://thumbs.dreamstime.com/b/bangladesh-map-national-flag-colors-102908710.jpg'
            alt=''
          />
        </div>
      </div>
      <div>
        {/* <Flicking
          viewportTag='div'
          cameraTag='div'
          cameraClass=''
          renderOnSameKey={false}
          align='center'
          onMove={(e: MoveEvent) => {}}
          onWillChange={(e: WillChangeEvent) => {}}
          horizontal={true}
          circular={true}
        >
          <div>panel 0</div>
          <div>panel 1</div>
          <div>panel 2</div>
        </Flicking> */}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {chefs.map(chefInfo => (
          <ChefData key={chefInfo._id} chefInfo={chefInfo}></ChefData>
        ))}
      </div>
    </div>
  );
};

export default Home;