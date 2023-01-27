import React from "react";
import { useParams } from "react-router-dom";
const ViewResto=(props)=>{

    const {id}=useParams();
    console.log(id);
    // after this by using this id which is coming from the list we can fetch the data from json file as we did in update component

return(
    <div>View Restaurand</div>
)
}
export default ViewResto;