import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder="sirkudos"/>
                </div>

                <div className="newUserItem">
                    <label >Fullname</label>
                    <input type="text" placeholder="Ikechukwu Attah"/>
                </div>

                <div className="newUserItem">
                    <label >Email</label>
                    <input type="email" placeholder="attah@gmail.com"/>
                </div>

                <div className="newUserItem">
                    <label >Password</label>
                    <input type="password" placeholder="*******"/>
                </div>

                <div className="newUserItem">
                    <label >Phone Number</label>
                    <input type="Tel" placeholder="+2348166928778424"/>
                </div>

                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder="Enugu Nigeria"/>
                </div>

                <div className="newUserItem">
                    <div className="newUserGender">
                    <label>Gender</label>
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>

                    </div>
                    <button className="newUserButton">Create</button>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                 
                </div>
                <div className="form-bnt">
                {/* <button className="newUserButton"></button> */}
                </div>
            </form>
           
        </div>
    )
}
