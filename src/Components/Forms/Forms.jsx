import React from "react";
import { useState } from "react";
import "./Froms.css";
import axios from "axios";

function Forms() { 
    const data = () => {
        axios({
          method: "POST",
          data: {
            name: setName,
            description: setDescription,
            selectList: setSelectList,
            kilocalories: setKilocalorie,
            Timestamp: setDate,
            hour: setHour,
            minute: setMinutes,
          },
          withCredentials: true,
          url: "http://localhost:3000/users/me/data",
        }).then((res) => console.log(res));
      };

    const [isInvalid, setIsInvalid] = useState(false);
    const [name, setName] = useState ('')
    const [description, setDescription] = useState ('')
    const [kiloCalorie, setKilocalorie] = useState ('')
    const [date, setDate] = useState ();
    const [selectList, setSelectList] = useState ();
    const [hour, setHour] = useState ();
    const [minutes, setMinutes] = useState ();

    
    const onChangeName = (e) => {
        const newNameValue = e.target.value;
        if (newNameValue.length > 15 && newNameValue.toString ) {
            newNameValue.map (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        }else {
            setName(e.target.value);
        }
    };
    
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const onChangeKilocal = (e) => {
        setKilocalorie(e.target.value);
    };
    
    const onChangeDate = (e) => {
        setDate(e.target.value);
    };
    
    const onChangeSelectList = (e) => {
        setSelectList(e.target.value);
    };

    const onChangeHour = (e) => {
        setHour(e.target.value);
    };

    const onChangeMinutes = (e) => {
        setMinutes(e.target.value);
    };


    return ( 
        <div className="Container">
            <form className="form-list">
                <h1>Add Activity</h1>

                    <label className="formControl">Name</label>
                    <input
                    id="Username" 
                    name="Name" 
                    type="text" 
                    placeholder="input your name" 
                    value={name} 
                    onChange={onChangeName}/>
              
                
                    <label className="formControl">Description</label>
                    <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={onChangeDescription} />
               
                    <br />                
                    <label className="formControl">Activity List</label>
                    <select value={selectList} 
                    onChange={onChangeSelectList}
                    >
                        <option value={selectList} 
                    onChange={onChangeSelectList}>running</option>             
                        <option value={selectList} 
                    onChange={onChangeSelectList}>cycling</option>
                        <option value={selectList} 
                    onChange={onChangeSelectList}>walking</option>
                        <option value={selectList} 
                    onChange={onChangeSelectList}>swimming</option>
                        <option value={selectList} 
                    onChange={onChangeSelectList}>hiking</option>
                    </select>

                    <label className="formControl">Kilocalories</label>
                    <input
                        type="number" placeholder="input calories" 
                        value={kiloCalorie} 
                        onChange={onChangeKilocal} />
                    <br />    
                    <label className="formControl">Date</label>
                        <input type="date" 
                        placeholder="D/M/Y"
                        value={date}
                        onChange={onChangeDate}
                        />

                    <br />
                    <label>Duration</label>
                    <div className="duration">
                        <input type="number" value={hour} onChange={onChangeHour} name="hour" min={0} max={24} required></input>
                        <label>Hr : </label> 
                        <input type="number" value={minutes} onChange={onChangeMinutes} name="minute" min={0} max={59} required></input>
                        <label>Mn</label>  
                    </div>
                    
                    <div className="saveActivity">
                        <button type="submit" onClick={data} className="saveButton">Save</button>
                    </div> 
            </form>
        </div>
    );
};
export default Forms;
