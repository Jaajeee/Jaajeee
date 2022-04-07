import React from 'react';
import NavBar from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile';
import SaveData from '../Components/Savedata/Savedata';
import "../App.css";


const DataPage = () => {
    return (
        <>
        <NavBar />
        <div className='Container'>
        <Profile />
        <SaveData />
        </div>
        </>
    )
};
export default DataPage;