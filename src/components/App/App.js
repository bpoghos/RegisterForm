import RegisterPage from '../RegisterPage';
import UserPage from '../UserPage/UserPage';
import './app.css';
import FCounter from '../Counter/FCounter';
import { useState } from 'react';


const App = () => {

  const [userData, setUserData] = useState(null)


  const handleRegistration = (userData) => {
    setUserData(userData)
  }

    return (
      <div className="app">
        {/* <FCounter /> */}
        {
          localStorage.getItem('data') ?
            <UserPage userData={userData} /> :
            <RegisterPage handleRegistration={handleRegistration} /> 
        }

      </div>
    );
  }

  export default App





