import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import './Header.css'

const Header = () => {


  const { user,logOut } = useContext(AuthContext);
  // console.log('...', user);
  const name = user?.displayName;
  const image = user?.photoURL;
  // console.log(image);
  // console.log(logOut);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(err => {
      // console.log(err.message);
    })
  }


  return (
    <div className='navbar bg-base-300 py-1 md:py-3 flex flex-col justify-center items-center md:flex-row md:justify-between'>
      <div className='web-title'>
        <h1 className='font-blod text-center text-5xl'>BD'S FOOD HOUSE</h1>
      </div>
      <div className='flex flex-col justify-center text-xl gap-2 md:gap-4 my-0 md:my-6 md:flex-row'>
        <ActiveLink to='/'>Home </ActiveLink>
        <ActiveLink className='' to='/blog'>
          Blog
        </ActiveLink>
      </div>
      <div className='flex flex-col justify-center items-center text-xl gap-2 md:gap-4 my-0 md:my-6 md:flex-row'>
        {user ? (
          <>
            {image && (
              <div
                className='tooltip flex items-center'
                data-tip={name && name}
              >
                <div className='avatar online'>
                  <div className='w-14 rounded-full'>
                    <img src={image} />
                  </div>
                </div>
              </div>
            )}

            <button className='btn btn-outline' onClick={handleLogOut}>
              logout
            </button>
          </>
        ) : (
          <>
            <div className='btn btn btn-outline'>
              <ActiveLink to='/register'>Sign Up</ActiveLink>
            </div>
            <div className='btn btn-outline '>
              <ActiveLink  to='/login'>login</ActiveLink>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Header;