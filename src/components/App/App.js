import RegisterPage from '../RegisterPage';
import UserPage from '../UserPage/UserPage';
import './app.css';
import FCounter from '../Counter/FCounter';
import { useState } from 'react';
import LocalStorageService from '../../services/LocalStorageService';
import DarkThemeToggle from '../DarkThemeToggle';


const App = () => {

  const storedData = LocalStorageService.getUserData()
  const [userData, setUserData] = useState(null)
  const [isRegistered, setIsRegistered] = useState(!!storedData)
  const [darkMode, setDarkMode] = useState(false)


  const handleRegistration = (uData) => {
    LocalStorageService.saveUserData(uData)
    setUserData(uData)
    setIsRegistered(true)
  }

  const onClearData = () => {
    LocalStorageService.clearUserData()
    setIsRegistered(false)
  }

  const onDarkMode = () => {
      setDarkMode(!darkMode)
  }

  const darkStyle = {
    backgroundColor: darkMode ? '#000' : '#fff',
    color: darkMode ? '#fff' : '#000'
  }



  return (
    <div className="app">
      <DarkThemeToggle onDarkMode={onDarkMode}/>
      {/* <FCounter /> */}
      {
        isRegistered ?
            <UserPage userData={userData} onClearData={onClearData}/>:
            <RegisterPage handleRegistration={handleRegistration} darkStyle={darkStyle}/>
      }

    </div>
  );
}

export default App





