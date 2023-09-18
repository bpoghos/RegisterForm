import { Component } from "react";
import './register-page.css'
export default class RergisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    files: [],
    validationErrors: {}
  }


  handleUploadClick = () => {
    this.fileInput.click();
  };


  handleFileChange = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        const newFiles = [...this.state.files, e.target.result];
        this.setState({ files: newFiles });
      };

      reader.readAsDataURL(file);
    }
  };


  validateEmail = (email) => {
    return false
  }
  validatePassword = (password) => {
    return false
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleRegister = () => {
    const { username, email, password, files } = this.state;
    const validationErrors = {}

    if (!email.trim() && !this.validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!password.trim() && !this.validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      const profile = this.props.handleRegistration({ username, email, password, files })
      localStorage.setItem('data', JSON.stringify(profile))

      this.setState({
        username: '',
        email: '',
        password: '',
        validationErrors: {}
      })
    } else {
      this.setState({ validationErrors })
    }

  }
  render() {
    const { username, email, password, validationErrors } = this.state;
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
            <button className="upload-image" onClick={this.handleUploadClick}>Upload</button>
            <input
              type="file"
              ref={(input) => (this.fileInput = input)}
              style={{ display: 'none' }}
              onChange={this.handleFileChange}
              multiple
            />

            {this.state.files.map((fileData, index) => (
              <div key={index} className="image">
                <img src={fileData} alt="photos" id="photo" />
              </div>
            ))}
          </div>

          <button
            className="register-btn"
            onClick={this.handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    )
  }
}