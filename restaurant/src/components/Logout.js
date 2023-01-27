import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Logout = () => {
    localStorage.clear();
    const navigate=useNavigate();
   useEffect(()=>{
    navigate('/login')
   },[])
    return (
       <div>
<Navigation></Navigation>
       </div>
    )
    
};

export default Logout;