import React, { useEffect, useState } from 'react'
import milmalogo from '../../../assets/Milma_logo.jpg'
import './SideBar.css'
import { BsFillDice4Fill } from 'react-icons/bs'
import { AiFillSetting, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function SideBar() {

 
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const navigate=useNavigate()


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const updateStatusOnResize = () => {
    if (window.innerWidth >767) {
      setIsDrawerOpen(true);
    } 
  };

  const navigateToLoginSecurity = () => {
  
    navigate("/");
  };

  

  useEffect(() => {
    window.addEventListener('resize', updateStatusOnResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateStatusOnResize);
    };
  }, []);


  return (
    <div className='container-fluid px-3 pt-4 dashboard-container '>

      <div className='d-flex justify-content-between'>
      <div className="sidebar-header mt-3 cursor-pointer" onClick={navigateToLoginSecurity}>
        <img src={milmalogo} alt="" className='rounded-circle' />
      </div>
      <div className="toggle-button " onClick={toggleDrawer}>
          <AiOutlineMenu />
        </div>
      </div>
       {isDrawerOpen &&  (
      <nav id="sidebar"  className={`d-flex flex-column justify-content-between Dash_sidebar drawer `} >
        <div>
       
      <ul className="list-unstyled components mt-5 pt-2">
        <li className="mt-3">
        <BsFillDice4Fill size={15} color='red' className='me-2' />
          <a>DashBoard</a>
        </li>
        <li className="mt-3">
        <BsFillDice4Fill size={15} color='red' className='me-2' />
          <a>Users</a>
        </li>
        <li className="mt-3">
        <BsFillDice4Fill size={15} color='red' className='me-2' />
          <a>Data</a>
        </li>
        <li className="mt-3">
        <BsFillDice4Fill size={15} color='red' className='me-2' />
          <a>Bulk Upload</a>
        </li>
      </ul>
      </div>

        <div className='mb-5 side_log'>
        <ul className="list-unstyled components">
        <li className="active ">
          <AiFillSetting color='red' className='me-1 mt-1' />
          <a >Settings</a>
        </li>
        <li className='mt-2'>
        <AiOutlineLogout color='red' className='me-1 mt-1' />
          <a >Logout</a>
        </li>

      </ul>
        </div>
      
    </nav>
    )}

    </div>
  )
}

export default SideBar