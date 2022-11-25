import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import Header from '../Header/Header';

const Home = () => {
    return (
      <div>
        <div >
          <Header></Header>
        </div>
        <div className='py-[5%]'>
          <Categories></Categories>
        </div>
      </div>
    );
};

export default Home;