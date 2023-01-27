import { useState } from "react";
import { Button } from "react-bootstrap";
import Navigation from "./Navigation";
import "./RestaurantCreate.css";
const RestaurantCreate=()=>{
    const [name,setName]=useState();
    const [address,setAddress]=useState();
    const [rating,setRating]=useState();
    const [email,setEmail]=useState();
    const restoName=(event)=>{
        setName(event.target.value);
        // console.log(event.target.value);
    }

    const restoAdd=(event)=>{
        setAddress(event.target.value);
        // console.log(event.target.value);
    }

    const restoRating=(event)=>{
        setRating(event.target.value);
        // console.log(event.target.value);
    }

    const restoEmail=(event)=>{
        setEmail(event.target.value);
        // console.log(event.target.value);
    }



async function addRestoDataHnadler(event){
    event.preventDefault();

    const restoData={
        name:name,
        address:address,
        rating:rating,
        email:email
    } 
    
   const response=await fetch("http://localhost:3000/reastaurant",{
        method: "POST",
        body: JSON.stringify(restoData),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setName("");
      setAddress("");
      setEmail("");
      setRating("");
    }
    return(
        <div>
            <Navigation></Navigation>
            <h1> Create Restaurant</h1>
        
         
        <input type='text' onChange={restoName} value={name} placeholder='Restaurant Name'></input><br/>
        <br/>
        <input type='text' onChange={restoAdd} value={address} placeholder='Restaurant Address'></input><br/><br/>
        <input type='text' onChange={restoRating}  value={rating} placeholder='Ratings'></input><br/><br/>
        <input type='text' onChange={restoEmail} value={email} placeholder='Restaurant Email'></input><br/><br/>
        <Button type="submit" onClick={addRestoDataHnadler}>Add</Button>
        
        
        
        </div>

    )
}

export default RestaurantCreate;