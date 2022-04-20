import { useState, useEffect } from "react";
import axios from "axios";
import "./Froms.css";

const AddActivity = () => {
    const initialState = {
        name: '',
        description: '',
        activity: '',
        kilocalories: '',
        date: '',
        hour: '',
        minute: '',
    }
    const [activity, setActivity] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isValided, setIsValided] = useState(false);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setActivity({...activity, [id]: value});
    }

    const handleClick = () => {
        let isNull = {
            name: false,
            description: false,
            activity: false,
            kilocalories: false,
            date: false,
            hour: false,
            minute: false,
        }
        if (activity.name === '') {
            isNull.name = false;
            setErrors((prevError) => {
                return {...prevError, name: 'Name is required'}
        })
        } else {
            isNull.name = true;
            setErrors((prevError) => {
                return {...prevError, name: ''}
        })

        }
        if (activity.description === '') {
            isNull.description = false;
            setErrors((prevError) => {
                return {...prevError, description: 'Description is required'}
        })  
        } else {
            isNull.description = true;
            setErrors((prevError) => {
                return {...prevError, description: ''}
        })
        }
        if (activity.activity === '') {
            isNull.activity = false;
            setErrors((prevError) => {
                return {...prevError, activity: 'Activity is required'}
        })
        } else {
            isNull.activity = true;
            setErrors((prevError) => {
                return {...prevError, activity: ''}
        })
        }
        if (activity.kilocalories === '') {
            isNull.kilocalories = false;
            setErrors((prevError) => {
                return {...prevError, kilocalories: 'Kilocalories is required'}
        })
        } else {
            isNull.kilocalories = true;
            setErrors((prevError) => {
                return {...prevError, kilocalories: ''}
        })
        } 
        if (activity.date === '') {
            isNull.date = false;
            setErrors((prevError) => {
                return {...prevError, date: 'Date is required'}
        })
        } else {
            isNull.date = true;
            setErrors((prevError) => {
                return {...prevError, date: ''}
        })
        }
        if (activity.hour === '') {
            isNull.hour = false;
            setErrors((prevError) => {
                return {...prevError, hour: 'Hour is required'}
        })
        } else {
            isNull.hour = true;
            setErrors((prevError) => {
                return {...prevError, hour: ''}
        })
        }
        if (activity.minute === '') {
            isNull.minute = false;
            setErrors((prevError) => {
                return {...prevError, minute: 'Minute is required'}
        })
        } else {
            isNull.minute = true;
            setErrors((prevError) => {
                return {...prevError, minute: ''}
        })
        }
        const isValided = isNull.name && isNull.description && isNull.activity && isNull.kilocalories && isNull.date && isNull.hour && isNull.minute;
        console.log(isValided);
        if (isValided === -1) {
            setIsValided(true);
        }
    }
    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: 'http://localhost:3000',
            })
            if (isValided) {
                await client.post('/users/me/activitiesData', activity)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res)
                        setIsValided(false);
                    }
                })
                .catch(err => {
                    console.log(err)
                }
            )();
            }
        })();
    }, [isValided]);

    return (
        <div className="Container">
            <form className="form-list">
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={activity.name} onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>
                <div className="form-item">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={activity.description} onChange={handleChange}/>
                    <p>{errors.description}</p>
                </div>
                <div className="form-item">
                    <label htmlFor="activity">Activity</label>
                    <select type="select" id="activity" value={activity.activity} onChange={handleChange}>
                        <option value="">Select Activity</option>
                        <option value="Running">Running</option>
                        <option value="Cycling">Cycling</option>
                        <option value="Walking">Walking</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Hiking">Hiking</option>
                    </select>
                    <p>{errors.activity}</p>
                </div>
                <div  className="form-item">
                    <label htmlFor="kilocalories">Kilocalories</label>
                    <input type="text" id="kilocalories" value={activity.kilocalories} onChange={handleChange}/>
                    <p>{errors.kilocalories}</p>
                </div>
                <div className="form-item">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={activity.date} onChange={handleChange}/>
                    <p>{errors.date}</p>
                </div>
                <div className="form-item">
                    <label htmlFor="Duration">Duration</label>
                    <br/>
                    <label htmlFor="hour">Hour</label>
                    <input type="number" id="hour" value={activity.hour} onChange={handleChange}/>
                    <p>{errors.hour}</p>
                    <label htmlFor="minute">Minute</label>
                    <input type="number" id="minute" value={activity.minute} onChange={handleChange}/>
                    <p>{errors.minute}</p>
                </div>
                <button className="btn-save" onClick={handleClick}>Save</button>
            </form>
        </div>
    )
}
export default AddActivity;