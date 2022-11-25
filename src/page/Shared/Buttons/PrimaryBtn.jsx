import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
      <div>
        <button className="text-color-my bg-color-my py-3 px-6 font-semibold hover:bg-red-400">
          {children}
        </button>
      </div>
    );
};

export default PrimaryBtn;