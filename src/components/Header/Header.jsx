import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Header = () => {


  const { user,logOut } = useContext(AuthContext);
  console.log('...', user);
  const image = user?.photoURL;
  console.log(image);
  // console.log(logOut);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(err => {
      console.log(err.message);
    })
  }


  return (
    <div className='navbar bg-base-300 flex flex-col justify-center items-center md:flex-row md:justify-between'>
      <div>
        <h1 className='font-blod text-4xl'>BD'S FOOD HOUSE</h1>
      </div>
      <div className='flex flex-col justify-center text-xl gap-2 md:gap-4 my-0 md:my-4 md:flex-row'>
        <ActiveLink to='/'>Home </ActiveLink>
        {user ? (
          <>
            {image && (
              <div className='avatar online'>
                <div className='w-12 rounded-full'>
                  <img src={image} />
                </div>
              </div>
            )}

            <button className='btn btn-error' onClick={handleLogOut}>
              logout
            </button>
          </>
        ) : (
          <>
              <div className='btn btn-info'>
                <ActiveLink to='/register'>Sign Up</ActiveLink>
              </div>
              <div className='btn bg-green-600'>
                <ActiveLink to='/login'>login</ActiveLink>
              </div>
          </>
        )}
        
          <ActiveLink className='' to='/blog'>
            blog
          </ActiveLink>
        
        <ActiveLink to='/222'>222</ActiveLink>
      </div>
    </div>
  );
};

export default Header;