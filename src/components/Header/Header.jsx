import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <div className='navbar bg-base-300 flex flex-col justify-center items-center md:flex-row md:justify-between'>
      <div>
        <h1 className='font-blod text-4xl'>ARABIA'S FOOD HOUSE</h1>
      </div>
      <div className='flex flex-col justify-center text-xl gap-2 md:gap-4 my-0 md:my-4 md:flex-row'>
        <ActiveLink to='/'>Home </ActiveLink>
        <ActiveLink to='/login'>login</ActiveLink>
        <ActiveLink to='/register'>register</ActiveLink>
        <ActiveLink to='/logout'>logout</ActiveLink>
        <ActiveLink to='/profile'>profile</ActiveLink>
        <ActiveLink to='/111'>111</ActiveLink>
        <ActiveLink to='/222'>222</ActiveLink>
      </div>
    </div>
  );
};

export default Header;