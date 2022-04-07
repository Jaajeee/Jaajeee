import React from "react";
import { useState, useEffect } from "react";
import DurationPicker from "react-duration-picker";
import "./Froms.css";

function Forms() {

    const [isInvalid, setIsInvalid] = useState(false);
    const [name, setName] = useState ('')
    const [description, setDescription] = useState ('')
    const [kiloCalorie, setKilocalorie] = useState ('')
    const [duration, setDuration] = useState ();
    const [date, setDate] = useState ();
    const [selectList, setSelectList] = useState ();
    
    //   .match(
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //       );
 
    const onChangeName = (e) => {
        const newNameValue = e.target.value;
        if (newNameValue.length > 15) {
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
    
    const onChangeDuration = (e) => {
        setDuration(e.target.value);
    };
    
    const onChangeDate = (e) => {
        setDate(e.target.value);
    };
    
    const onChangeSelectList = (e) => {
        setSelectList(e.target.value);
    };

    const submit = () => {
        const isNameOK = name.length >=4 && name.toString; 
    }
    


    return ( 
        <div className="Container">
            <form className="form-list">
                <h1>Add Activity</h1>

                    <label className="formControl">Name</label>
                    <input
                    id="Username" 
                    name="Name" 
                    type="text" 
                    isInvalid={isNameOK}
                    placeholder="input your name" 
                    value={name} 
                    onChange={onChangeName}/>
              
                
                    <label className="formControl">Description</label>
                    <input 
                    type="text" 
                    placeholder="Description" 
                    required  
                    value={description} 
                    onChange={onChangeDescription}/>
               
                    <br />                
                    <label className="formControl">Activity List</label>
                    <select value={selectList} onChangeSelectList={(e) => selectList(e.target.value)}>
                        <option value="run">running</option>             
                        <option value="cycling">cycling</option>
                        <option value="walk">walking</option>
                        <option value="swimming">swimming</option>
                        <option value="hike">hiking</option>
                    </select>

                    <label className="formControl">Kilocalories</label>
                    <input
                        type="number" placeholder="input calories" 
                        required value={kiloCalorie} onChangeKilocal={(e) => kiloCalorie(e.target.value) }/>
                    <br />    
                    <label className="formControl">Date</label>
                        <input type="date" 
                        placeholder="D/M/Y"
                        value={date}
                        onChangeDate={(e) => setDate(e.target.value)}
                        />
                    <br />
                    <label>Duration</label>
                    <div className="durationPicker">
                        <DurationPicker></DurationPicker> 
                    </div>
                    
                    <div className="saveActivity">
                        <input type="submit" value="SAVE" className="saveButton" />
                    </div>    
            </form>
        </div>
    );
};
export default Forms;
