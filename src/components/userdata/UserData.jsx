import React from 'react';
import "./userdata.css"
import { FaUserCircle } from 'react-icons/fa';

const UserData = ({userName, email}) => {
  return (
    <div className="userData">
        <div className="profilePic" >
            <FaUserCircle size={32} color='green'/>
        </div>
        <div>
            <p>{userName}</p>
            <p className="email">{email}</p>
        </div>
    </div>
  )
}

UserData.defaultProps = {
    userName: "User Name",
    email: "testemail@test.com"
}

export default UserData