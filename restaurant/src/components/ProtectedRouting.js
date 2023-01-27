import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRouting = (props) => {
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
           if(!login){
            navigate('/login');
           }
    })
    return (
        <div>
        
            <Component></Component>
        </div>
    );
};

export default ProtectedRouting;