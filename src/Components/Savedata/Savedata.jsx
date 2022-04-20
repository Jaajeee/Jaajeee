import React from "react";
import "./Savedata.css"
import  "./datas.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import EditModal from "./modal";


const SaveData = () => {
        const [data,setData] = useState([{}]);
        const [isEdit, setIsEdit] = useState("");
        
    /*IIFE function help to run asyn fuction*/
    useEffect(()=>{
            (async ()=>{
                const client = axios.create({
                    baseURL: 'http://localhost:3000',
                })
                const res = await client.get(`/users/me/activitiesData`)
                setData(res.data)
            })();
        },[])

        const onEdit = (id)=>{
            setIsEdit(id)
        }

        const onModalOff = ()=>{
            setIsEdit("")
        }

        const onDelete = async (id)=>{
            const client = axios.create({
            baseURL: 'http://localhost:3000',
            })
            const res = await client.delete(`/users/me/activitiesData/${id}`)
            console.log(res)

    return (
        <>  
        <EditModal id={isEdit} edit={isEdit && true} onOff={onModalOff} />
        <div className="Data">
          <table className="table-container">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Activity</th>
                    <th>KiloCalories</th>
                    <th>Date</th>
                    <th>Duration
                    </th>
                </tr>
                </thead>
             <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.activity}</td>
                            <td>{item.kcal}</td>
                            <td>{item.date}</td>
                            <td>{item.duration}</td>
                            <td>
                                <Link to={`/edit/${item._id}`} onClick={()=>onEdit(item._id)}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                                <button className="btn btn-danger" onClick={()=>onDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                )}
            </tbody>
            </table>
            <div className="add-activity">
                <Link to="/addactivity" className="add-activity-btn"> Add Activity
                </Link>
            </div>
        </div>
        </>
    );
};
};
export default SaveData;