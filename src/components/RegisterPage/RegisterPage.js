import { useState } from 'react';
import './register-page.css'
import LocalStorageService from '../../services/LocalStorageService';


const RergisterPage = ({ handleRegistration }) => {


  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [files, setFiles] = useState([])
  const [validationErrors, setValidationErrors] = useState({})

  let fileInput



  const handleUploadClick = () => {
    fileInput.click();
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const fileData = e.target.result; 
        setFiles([fileData]); 
      };
  
      reader.readAsDataURL(file); 
    }
  };
  


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    switch (name) {
      case 'username':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  

  const handleRegister = () => {
    const validationErrors = {}
    const allState = { username, email, password, files }
    
    if (!email.trim() || !validateEmail(email)) {
      console.log(!validateEmail(email));
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!password.trim() || !validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      handleRegistration(username, email, password, files)
      LocalStorageService.saveUserData(allState)


      setUserName('')
      setEmail('')
      setPassword('')
      setFiles([])
      setValidationErrors({})


    } else {
      setValidationErrors(validationErrors)
    }

  }
  
    return (
      <div className="register-page-wrapper">
        <h1>Register page</h1>
        <div className="register-form">
          <div className="register-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{validationErrors.email}</span>
                <span>{validationErrors.password}</span>
                <span>{validationErrors.username}</span>
              </div>
            ) : null
          }

          <div className="image-container">
            <button className="upload-image" onClick={handleUploadClick}>Upload</button>
            <input
              type="file"
              ref={(input) => (fileInput = input)}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            {files.map((fileData, index) => (
              <div key={index} className="image">
                <img src={fileData} alt="photos" id="photo" />
              </div>
            ))}
          </div>

          <button
            className="register-btn"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    )
  }


  export default RergisterPage