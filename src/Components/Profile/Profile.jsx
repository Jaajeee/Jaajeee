import React from "react";
import './Profile.css';
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div className="profile-sidebar">
            <div className="all-profile">
                <MdAccountCircle className="img-profile" />
                <div className="profile-menu">
                    <h1>Account: </h1>
                    <p>example@example.com</p>
                
                
                    <h1>Name: </h1>
                    <h2>Name Surname</h2>
                
                
                    <h1>Height: </h1>
                    <h2>175</h2>
                
                
                    <h1>Weight: </h1>
                    <h2>68</h2>
               
                
                    <h1>Age: </h1>
                    <h2>27</h2>
                </div>
                <Link to="/" className="log-button" name="log out"> Log out </Link>
            </div>
        </div>
  );
};