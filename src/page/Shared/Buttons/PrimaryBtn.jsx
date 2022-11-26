import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
      <div>
        <button className="hover:text-[#cad5e2] bg-[#cad5e2] text-[#03203C] py-3 px-6 font-semibold hover:bg-red-400">
          {children}
        </button>
      </div>
    );
};

export default PrimaryBtn;