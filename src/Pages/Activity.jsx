import NavBar from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile';
import Forms from '../Components/Forms/Forms';
import "../App.css";
// import AddActivity from '../Components/Forms/Formvalidate';

const AddActivityPage = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className='Container'>
         <Profile></Profile>
         <Forms></Forms>
         {/* <AddActivity></AddActivity> */}
        </div>
        </>
    )
};
export default AddActivityPage;