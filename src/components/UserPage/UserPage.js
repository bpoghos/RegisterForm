import LocalStorageService from '../../services/LocalStorageService'
import './user-page.css'

const UserPage = ({ onClearData }) => {


const data = LocalStorageService.getUserData()

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
          <button className="logout-btn" onClick={onClearData}>Logout</button>
        </div>
      )
    }


    export default UserPage