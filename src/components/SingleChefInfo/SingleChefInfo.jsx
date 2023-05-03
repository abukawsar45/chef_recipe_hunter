import React from 'react';
import { useParams } from 'react-router-dom';

const SingleChefInfo = () => {
  const { chefId } = useParams();
   console.log('oooo', chefId);
  return (
    <div>
      <h3>Chef details</h3>
    </div>
  );
};

export default SingleChefInfo;