import React from "react";
import "./Savedata.css"
import  "./datas.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import EditModal from "./modal";


const SaveData = () => {
    const [data,setData] = useState([{}]);
        
    /*IIFE function help to run asyn fuction*/
    useEffect(()=>{
            (async ()=>{
                const client = axios.create({
                    baseURL: 'http://localhost:4000',
                })
                const res = await client.get(`/users/activityData`)
                setData(res.data)
            })();
        },[])

        // const onEdit = (id)=>{
        //     setIsEdit(id)
        // }


        const onDelete = async (id)=>{
            const client = axios.create({
            baseURL: 'http://localhost:4000',
            })
            const res = await client.delete(`/users/activityData/${id}`)
            console.log(res)
        }

    return (
        <>  
        <div className="Container">
          <table className="table-container">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Activity</th>
                    <th>KiloCalories</th>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Minute</th>
                    <th>edit</th>
                </tr>
                </thead>
             <tbody>
                {data.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.selectList}</td>
                            <td>{item.kilocalories}</td>
                            <td>{item.Timestamp}</td>
                            <td>{item.hour}</td>
                            <td>{item.minute}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={onDelete}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                )}
            </tbody>
            </table>
            {/* <div className="add-activity">
                <Link to="/addactivity" className="add-activity-btn"> Add Activity
                </Link>
            </div> */}
        </div>
        </>
    );
};
export default SaveData;