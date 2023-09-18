import { Component } from 'react';
import RegisterPage from '../RegisterPage';
import UserPage from '../UserPage/UserPage';
import './app.css';


export default class App extends Component {

  state = {
    isRegistered: false,
    userData: null
  }


  handleRegistration = (userData) => {
    this.setState({
      userData,
      isRegistered: true,
    })
  }

  render() {
    const { isRegistered, userData } = this.state



    return (
      <div className="app">
        {
          isRegistered ?
            <UserPage userData={userData} /> :
            <RegisterPage handleRegistration={this.handleRegistration} />
        }

      </div>
    );
  }


}


