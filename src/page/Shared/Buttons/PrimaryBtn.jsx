import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
      <div>
        <button className="text-color-my bg-color-my py-3 px-6 hover:bg-white hover:border hover:border-[#383CC1] hover:text-[#383CC1] font-semibold">
          {children}
        </button>
      </div>
    );
};

export default PrimaryBtn;