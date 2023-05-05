import React ,{Suspense} from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <div className='my-2 mx-2 md:my-4 md:mx-4 lg:mx-8 lg:my-6'>
      <Header></Header>
      <Suspense fallback={<p>Please wait,page loading</p>}>
        <Outlet></Outlet>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Main;