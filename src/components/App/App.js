import { Component } from 'react';
import RegisterPage from '../RegisterPage';
import UserPage from '../UserPage/UserPage';
import './app.css';


export default class App extends Component {

  state = {
    userData: null
  }


  handleRegistration = (userData) => {
    this.setState({
      userData,
      
    })
  }


  render() {
    const { userData } = this.state



    return (
      <div className="app">
        {
          localStorage.getItem('data') ?
            <UserPage userData={userData} /> :
            <RegisterPage handleRegistration={this.handleRegistration} /> 
        }

      </div>
    );
  }


}


