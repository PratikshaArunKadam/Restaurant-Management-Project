import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faTrashCan } from '@fortawesome/free-regular-svg-icons';

import { useState } from "react";
import { Button, Container, Form, FormControl, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const RestaurantSearch = () => {
  const [searchData, setSearchData] = useState();
  const [getData, setGetData] = useState();
  const [nodata, setNoData] = useState(false);

  const inputDataHandler = (event) => {
    event.preventDefault();
    setSearchData(event.target.value);
  };

  const searchDataHandler = () => {
    fetch("http://localhost:3000/reastaurant?q=" + searchData).then(
      (response) => {
        response.json().then((result) => {
          if (result.length > 0) {
            
            setGetData(result);

            setNoData(false);
          } else {
            setNoData(true);
            setGetData(null);
          }
        });
      }
    );
  };


  const onDeleteHandler=(id)=>{
     fetch("http://localhost:3000/reastaurant/"+id,
     {
        method:"DELETE"
     }).then((response)=>{
        alert("data has been deleted");

        // this fetch is used again to refresh the table 
        fetch("http://localhost:3000/reastaurant?q=" + searchData).then(
            (response) => {
              response.json().then((result) => {
                if (result.length > 0) {
                  setGetData(result);
                  setNoData(false);
                } else {
                  setNoData(true);
                  setGetData(null);
                }
              });
            }
          );
     })
  }  

  return (
    <Container>
      <Navigation></Navigation>
      Restaurant Search
      <br></br>
      <FormControl type="text" onChange={inputDataHandler}></FormControl>
      <br></br>
      <br></br>
      <Button onClick={searchDataHandler}>Search</Button>
      <br></br>
      {getData ? (
        <div>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ADDRESS</th>
                <th>Ratings</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getData.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.ratings}</td>
                  <td>{item.email}</td>
                  <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>  </Link>
                  <span onClick={()=>{onDeleteHandler(item.id)}}> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
      {nodata ? <h3>No data found</h3> : ""}
    </Container>
  );
};

export default RestaurantSearch;
