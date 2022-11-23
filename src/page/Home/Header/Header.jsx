import React from 'react';

const Header = () => {
    return (
      <div className="text-center">
        <div className="md:w-3/4 mx-auto">
          <h1 className="text-4xl md:text-6xl my-2">
            Overstock - Fashion Store  Resle Laptops 
          </h1>
          <p className="text-lg my-2 text-zinc-500">
            If you are planning to buy a fresh used laptop then Overstock – Fashion Store 
            is what you need.
          </p>
          <button className="btn">View Laptops</button>
        </div>
      </div>
    );
};

export default Header;