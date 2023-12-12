import React from 'react'
import SideBar from '../Components/DashBoard/SideBar/SideBar'
import DashBoardContent from '../Components/DashBoard/DashBoardContent/DashBoardContent'
import  '../Components/DashBoard/DashBoardContent/DashBoardContent.css'


function DashBoard() {


  return (
    <div className="container-fluid dash_height">
    <div className="row ">
      <div className="col-lg-2 col-md-3 ">
        <SideBar />
      </div>
      <div className="col-lg-10 col-md-9 body_DarkWhite px-5">
       <DashBoardContent  />
      </div>
    </div>
  </div>
  )
}

export default DashBoard