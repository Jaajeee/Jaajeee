import React from 'react';
import Profile from '../Components/Profile/Profile';
import SaveData from '../Components/Savedata/Savedata';
import "../App.css";
import NavBar from '../Components/Navbar/Navbar';


const DataPage = () => {
    return (
        <main>
            <NavBar></NavBar>
            <div className='Container'>
            <Profile></Profile>   
            <SaveData></SaveData>
            </div>
        </main>
    )
};
export default DataPage;