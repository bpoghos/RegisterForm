import RegisterPage  from '../RegisterPage';
import UserPage from '../UserPage/UserPage';
import './app.css';
import FCounter from '../Counter/FCounter';
import { useState } from 'react';
import LocalStorageService from '../../services/LocalStorageService';


const App = () => {

  const storedData = LocalStorageService.getUserData()
  const [userData, setUserData] = useState(null)
  const [isRegistered, setIsRegistered] = useState(!!storedData)


  const handleRegistration = (uData) => {
    LocalStorageService.saveUserData(uData)
    setUserData(uData)
    setIsRegistered(true)
  }

  const onClearData = () => {
    LocalStorageService.clearUserData()
    setIsRegistered(false)
  }

    return (
      <div className="app">
        {/* <FCounter /> */}
        {
          isRegistered ?
            <UserPage userData={userData} onClearData={onClearData}/> :
            <RegisterPage handleRegistration={handleRegistration} /> 
        }

      </div>
    );
  }

  export default App





