import { Component } from "react";
import './user-page.css'

export default class UserPage extends Component {


    render() {
      const { username, email, password, files } = this.props.userData


      return (
        <div className="user-page-wrapper">
          <h1>Wellcome, <span>{username}!</span></h1>
          <img src={files} alt="profile-pic" />
          <h4>Personal info</h4>
          <div>
            Email: <span>{email}</span>
          </div>
          <div>
            Password: <span>{password}</span>
          </div>
        </div>
      )
    }
}