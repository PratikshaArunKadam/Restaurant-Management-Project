import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Login=()=>{
       
    const inputName=useRef();
    const inputPassword=useRef();
    const navigate=useNavigate();

   
    const loginHandler=(event)=>{
        event.preventDefault();
      const  name=inputName.current.value;
    //   console.log(name)
      const  password=inputPassword.current.value;
       
       fetch("http://localhost:3000/login?q=" + name).then((response)=>{
      return  response.json().then((result)=>{
            console.log(result);
         if(result.length>0){
          localStorage.setItem('login',JSON.stringify(result));
        navigate('/list');
         }
         else{
            alert("Please check username and password");
          
         }
        })
       })

    }

    return(
        <div>
    <Navigation></Navigation>
          <Form>
            <input type='text' ref={inputName}  placeholder="Enter Name"></input>
            <br></br>
            <br></br>
            <input type='password' ref={inputPassword}  placeholder="Enter Password"></input>
            <br></br>
            <br></br>
            <Button type="submit" onClick={loginHandler} >Login</Button>
          </Form>

        </div>
    )
}

export default Login;