import { Component } from "react";
import './user-page.css'

export default class UserPage extends Component {


  onClearData = () => {
    localStorage.clear()
  }


    render() {
      const data = JSON.parse(localStorage.getItem('data'));

      return (
        <div className="user-page-wrapper">
          <h1>Wellcome, <span>{data?.username}!</span></h1>
          <img src={data?.files} alt="profile-pic" />
          <h4>Personal info</h4>
          <div>
            Email: <span>{data?.email}</span>
          </div>
          <div>
            Password: <span>{data?.password}</span>
          </div>
          <button className="logout-btn" onClick={this.onClearData}>Logout</button>
        </div>
      )
    }
}