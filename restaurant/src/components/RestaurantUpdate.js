import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Route, useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";

const RestaurantUpdate = (props) => {

  const { id } = useParams();    //it is used to access  id from url which get from List
  // console.log(id);

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [rating, setRating] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/reastaurant/" + id)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        //   console.log(data);
        
        // console.log(result.name);
        setName(result.name);

        setAddress(result.address);
        setRating(result.rating);
        setEmail(result.email);
      });
  }, []);


  const navigate=useNavigate();
  async function updateRestoHandler(event) {
    event.preventDefault();

    const updatedData = {
      name: name,
      address: address,
      rating: rating,
      email: email,
    };

    const response = await fetch("http://localhost:3000/reastaurant/" + id, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    alert("data updadet Successfully");
   navigate("/list");
  }



  const restoName = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };

  const restoAdd = (event) => {
    setAddress(event.target.value);
    // console.log(event.target.value);
  };

  const restoRating = (event) => {
    setRating(event.target.value);
    // console.log(event.target.value);
  };

  const restoEmail = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div>
      <Navigation></Navigation>
      <input type="text" value={name} onChange={restoName}></input>
      <br />
      <br />

      <input type="text" value={address} onChange={restoAdd}></input>
      <br />
      <br />

      <input type="text" value={rating} onChange={restoRating}></input>
      <br />
      <br />

      <input type="text" value={email} onChange={restoEmail}></input>
      <br />
      <br />

      <Link to={"/list"}><Button type="submit" onClick={updateRestoHandler}>
        Update
      </Button></Link>
    </div>
  );
};

export default RestaurantUpdate;
