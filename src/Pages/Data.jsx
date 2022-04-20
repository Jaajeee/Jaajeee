import React from 'react';
import Profile from '../Components/Profile/Profile';
import SaveData from '../Components/Savedata/Savedata';
import "../App.css";
import NavBar from '../Components/Navbar/Navbar';


const DataPage = () => {
    return (
        <main>
            <NavBar></NavBar>
            <Profile></Profile>
            <SaveData></SaveData>
        </main>
    )
};
export default DataPage;