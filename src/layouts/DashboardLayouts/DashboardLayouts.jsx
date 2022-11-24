import React from 'react';
import Dashboard from '../../page/Dashboard/Dashboard/Dashboard';
import Navbar from '../../page/Shared/Navbar/Navbar';

const DashboardLayouts = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>
    );
};

export default DashboardLayouts;