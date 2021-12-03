import React from 'react'
import topbar from './topbar.css'
import {NotificationsNone,Settings,Language } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">

          <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Panel</span>
            </div>
            <div className="topRight">
             <div className="topbarContainer">
                 <NotificationsNone />
                 <span className="topIconBadge">2</span>
             </div>

             <div className="topbarContainer">
                 <Settings />
                 <span className="topIconBadge">2</span>
             </div>

             <div className="topbarContainer">
                 <Language/>
                
             </div>

             <div className="topbarContainer">
                 <div className="topbarProfile">
                  <img src="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                   alt="Elon musk" className="topbarImg" />

                   <h2 className="topbarName">Musk</h2>

                   </div>
                
             </div>
            
               
     
 

              
            </div>
        </div>
      
        </div>
    )
}
