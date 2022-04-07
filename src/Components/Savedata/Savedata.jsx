import React from "react";
import "./Savedata.css"
import { Link } from "react-router-dom";

function SaveData() {
    return (
        <div className="Data">
         <table className="tab-list">
            <tr>
                <th>Description</th>
                <th>Activity Type</th>
                <th>KiloCalories</th>
                <th>Date</th>
            </tr>
        </table>

        <div className="add-activity">
            <Link to="/Activity" className="add-activity-btn"> Add Activity</Link>
        </div>
        </div>
    );
};
export default SaveData;