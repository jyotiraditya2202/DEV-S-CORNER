import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx'
import SideBar from '../../components/DashboardSideBar/DashboardSideBar.jsx';
import List from '../../components/DashboardList/DashboardList.jsx';
import './DashboardProject.css';

export default function LogInForm(){
    return(
        <>
        <NavBar />
        <div className='MainContent'>
        <SideBar/>
        <List/>
        </div>
        </>
    );
}