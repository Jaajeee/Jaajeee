import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    overflow: 'hidden',
    width: '20%'
  },
};

Modal.setAppElement('#root');

function EditModal({ id, edit, onOff }) {
  const initialUpdate = {
    name: '',
    description: '',
    selectList: '',
    kilocalories: '',
    hour: '',
    minute: '',
  }

  const [IsOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState(initialUpdate)
  const [inputIsNull, setInputIsNull] = useState([])
  const [isUseUpdate, setIsUseUpdate] = useState(false)

  useEffect(() => {
    if (edit) {
      setIsOpen(true);
      console.log('setIsOpen is true')
    }
  }, [edit])
  function afterOpenModal() {
    pullData();
  }
  function closeModal() {
    setIsOpen(false);
    setInputIsNull([])
    onOff()
    console.log('setIsOpen is false')
  }
  const pullData = async () => {
    const client = axios.create({
      baseURL: 'http://localhost:3000',
    })
    const res = await client.get(`/users/me/activitiesData/${id}`)
    setUpdateData(res.data)
  }

  const onChange = ({ target }) => {
    const { name, value } = target
    setUpdateData({ ...updateData, [name]: value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    let isNull = [];
    Object.values(updateData).map((data, index) => {
      return (data === "") && isNull.push(index)
    })
    setInputIsNull(isNull)
    if (isNull.length === 0){
      setIsUseUpdate(true)
    }
  }
  useEffect(()=>{
    (async ()=> {const client = axios.create({
          baseURL: 'http://localhost:3000',
        })
        if (isUseUpdate){
          const res = await client.put(`/users/me/activitiesData/${id}`,updateData)
          console.log(res)
        }
      })();
  },[isUseUpdate])
return (
  <div>
    <Modal
      isOpen={IsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Modal"
    >
      <form className='form-input' onSubmit={onSubmit}>
        <h2 style={{ color: "black" }}>Edit</h2>
        <label>Name</label>
        <input type="text" name='name' value={updateData.name} onChange={onChange} />
        {inputIsNull[0] === 1 && <p className='error'>Please fill in the blank</p>}
        <label>Description</label>
        <input type="text" name='description' value={updateData.description} onChange={onChange} />
        {inputIsNull[1] === 2 && <p className='error'>Please fill in the blank</p>}
        <label>Activity List</label>
        <select value={updateData.selectList} name='activityList' onChange={onChange}>
          <option value={onChange}>Running</option>
          <option value={onChange}>Walking</option>
          <option value={onChange}>Cycling</option>
          <option value={onChange}>Swimming</option>
          <option value={onChange}>Hiking</option>
        </select>

        <label>Kilocalories</label>
        <input type="number" name='kilocalories' value={updateData.kilocalories} onChange={onChange} />
        {(inputIsNull[0] === 3 || inputIsNull[1] === 3) && <p className='error'>Please fill in the blank</p>}
        
        <label>Date</label>
        <input type="date" name='date' value={updateData.Timestamp} onChange={onChange} />
        <button type='submit'>Save</button>
        <button onClick={closeModal}>Close</button>
      </form>
    </Modal>
  </div>
);
}
export default EditModal;
