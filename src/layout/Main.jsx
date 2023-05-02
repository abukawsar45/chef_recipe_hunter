import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <div className='mx-2 md:mx-6 lg:mx-8'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Main;