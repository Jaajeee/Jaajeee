import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from './Pages/Login';
import SignUpPage from './Pages/Signup';
import AddActivityPage from './Pages/Activity';
import DataPage from './Pages/Data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>} />
        <Route path='/signup' element={<SignUpPage></SignUpPage>} />
        <Route path='/addactivity' element={<AddActivityPage />} />
        <Route path='/data' element={<DataPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
