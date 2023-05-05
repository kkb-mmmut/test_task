import React from 'react'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const navigateToHome = () => { 
    navigate('/');
  };
  const navigateToUserdata = () => { 
    navigate('/userdata');
  };
  const navigateToAboutme = () => { 
    navigate('/aboutme');
  };
  return (
    <div className='nav'> 
          <p className="active"onClick={navigateToHome} >Registration</p>
          <p onClick={navigateToUserdata} >Registered Users</p> 
          <p onClick={navigateToAboutme}> About Me</p> 
      </div>
  )
}

export default Navbar