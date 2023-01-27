import React, { Component, useEffect, useState } from "react";
import { Button, Popover, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEdit, faTrashAlt } from  '@fortawesome/free-regular-svg-icons'
import Navigation from "./Navigation";

// class RestaurantList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: null,
//       content: null,
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:3000/reastaurant").then((respone) => {
//       respone.json().then((result) => {
//         this.setState({ list: result });
//       });
//     });
//   }
//   testfun() {
//     this.setState({ content: this.list }); //not working
//     console.log(this.content);
//   }

  

//   render() {
//     return (
//       <div>
//         {this.state.list ? (
//           <div>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>id</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Location</th>
//                   <th>Ratings</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                 this.state.list.map((item, i) => (

//                 //   <div className="div">
//                 //     <span>{item.name} </span>
//                 //     <span>{item.email} </span>
//                 //     <span>{item.address} </span>
//                 //     <span>{item.rating} </span>
//                 //     {/* pnClick function-->   {()=>{return <p>{item.name}</p>}} */}
//                 //     <span>
//                 //       <button onClick={() => this.testfun()}>View Resto</button>
//                 //     </span>
//                 //     <span>{this.content}</span>
//                 //   </div>
//            <tr>

//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.address}</td>
//             <td>{item.rating}</td>
//             <td> <button ><Link to={"/view/"+item.id}>View</Link></button>
//              OR  <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
//              OR <span onClick={deleteHandler}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Lspanink>
//              </td>
            
//            </tr>



//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         ) : (
//           <p>Please Wai</p>
//         )}
//       </div>
//     );
//   }
// }

// export default RestaurantList;





const RestaurantList=()=>{

    const [list,setList]=useState();
    const [content,setContend]=useState();
    
    useEffect(()=>{
      fetch("http://localhost:3000/reastaurant").then((respone) => {
      respone.json().then((result) => {
       setList(result);
      });
    });
  
    },[]);

    const deleteHandler=(id)=>{
      
    fetch("http://localhost:3000/reastaurant/"+id,
    {
      method: "DELETE",
        
      // headers: {
      //   "content-type": "application/json",
      // },
    }).then((result)=>{
      result.json().then((resp)=>{

        // this fetch promise is for when we delete data then it will refresh or loaded 

        fetch("http://localhost:3000/reastaurant").then((respone) => {
          respone.json().then((result) => {
           setList(result);
          });
        });
      })
    })
    }
   
// ----------------------FOR VIEW Button-------------------------
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [rating, setRating] = useState();
  const [email, setEmail] = useState();

   
  const viewHandler=(id)=>{
   fetch("http://localhost:3000/reastaurant/"+id).then((response)=>{
    response.json().then((result)=>{
      setName(result.name);

        setAddress(result.address);
        setRating(result.rating);
        setEmail(result.email);
    
    })
   })
  }
 


  return(
    <div>
      <Navigation></Navigation>
        {list ? (
          <div>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Ratings</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                list.map((item) => (
           <tr>

            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{item.rating}</td>
            <td> 
             <Button onClick={()=>{viewHandler(item.id)}}>View</Button>
              <Link to={"/update/"+item.id}> <FontAwesomeIcon icon={faEdit}>   </FontAwesomeIcon></Link>
              <span onClick={()=>{deleteHandler(item.id)}} >   <FontAwesomeIcon icon={faTrashAlt}  color='orange'> </FontAwesomeIcon></span>
             </td>
            
           </tr>



                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wai</p>
        )}



        <div className="">
          <p> { rating}</p>
          <p> { name}</p>
          <p> { address}</p>
          <p>{ email}</p>
        
        </div>
      </div>
  )
}

export default RestaurantList;