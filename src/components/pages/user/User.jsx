import { CalendarToday, MailOutline, PhoneAndroid, LocationSearching, PermIdentity, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/11/trump-milley-china-07.jpg?quality=80&strip=all&w=744" 
                        alt="profile" className="userShowImg" />
                    
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Ikechukwu Attah</span>
                        <span className="userShowJobRole">SoftWare Engineer</span>
                     </div>
                    </div>

                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userIcon"/>
                        <span className="userShowInfoTitle">Ike Kudos</span>
                        </div>

                        <div className="userShowInfo">
                        <CalendarToday className="userIcon"/>
                        <span className="userShowInfoTitle">11-12-90</span>
                    
                        </div>
                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                        <PhoneAndroid className="userIcon"/>
                        <span className="userShowInfoTitle">+2348166928779</span>
                        </div>

                        <div className="userShowInfo">
                        <MailOutline className="userIcon"/>
                        <span className="userShowInfoTitle">ikechukwu@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                        <LocationSearching className="userIcon"/>
                        <span className="userShowInfoTitle">Enugu Nigeria</span>
                        </div>
                       
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" placeholder="kudos12" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" className="userUpdateInput" placeholder="Attah Ikechukwu" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" className="userUpdateInput" placeholder="ikechukwu@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="Tel" className="userUpdateInput" placeholder="+23481669287791" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className="userUpdateInput" placeholder="Enugu Nigeria" />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://nypost.com/wp-content/uploads/sites/2/2021/11/trump-milley-china-07.jpg?quality=80&strip=all&w=744"
                                 alt="photo" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
    )
}
