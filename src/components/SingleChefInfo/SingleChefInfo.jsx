import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleChefInfo = () => {
  const { chefId } = useParams();
  console.log('oooo', chefId);
  const chefDetails = useLoaderData();
  console.log(chefDetails);


  return (
    <div>
      <h3>Chef details</h3>
    </div>
  );
};

export default SingleChefInfo;