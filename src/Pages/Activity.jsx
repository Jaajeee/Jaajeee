import React from 'react';
import NavBar from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile';
import Forms from '../Components/Forms/Forms';
import "../App.css";


const AddActivity = () => {
    return (
        <>
        <NavBar />
        <div className='Container'>
         <Profile />
         <Forms />
        </div>
        </>
    )
};
export default AddActivity;