import React from 'react';
import { Outlet } from 'react-router-dom';
import CEONavBar from '../Layout/CEONavBar';


function CEODashboard() {
  return (
    <>
    <CEONavBar/>
    <Outlet />
    </>
  );
}

export default CEODashboard;