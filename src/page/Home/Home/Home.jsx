import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import Header from '../Header/Header';

const Home = () => {
    return (
      <div>
        <div className="min-h-screen flex justify-center items-center">
          <Header></Header>
        </div>
        <Categories></Categories>
      </div>
    );
};

export default Home;