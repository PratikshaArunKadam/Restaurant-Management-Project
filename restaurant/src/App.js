
import "./App.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Home from "./components/Home";
import ViewResto from "./components/ViewResto";

import Login from "./components/Login";

import Logout from "./components/Logout";
import ProtectedRouting from "./components/ProtectedRouting";
function App(props) {
  return (
    <div className="App">
      {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/update">Update</Link>
      </li>
      <li>
        <Link to="/details">Details</Link>
      </li>
      <li>
        <Link to="/list">Lists</Link>
      </li>
    </ul> */}
      <Routes>
        <Route path="/list" element={<ProtectedRouting Component={RestaurantList}/>}></Route>

        <Route path="/logout" element={<Logout />}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/details"
          element={<ProtectedRouting Component={RestaurantDetails}/>}
        ></Route>
        <Route path="/create" element={<ProtectedRouting Component={RestaurantCreate} />}></Route>
        <Route
          path="/search"
          element={<ProtectedRouting Component={RestaurantSearch}/>}
        ></Route>
        <Route path="/update/:id" element={<ProtectedRouting Component={RestaurantUpdate} />}></Route>
        <Route path="/view/:id" element={<ProtectedRouting Component={ViewResto} />}></Route>
        <Route path="/" element={<ProtectedRouting Component={Home} />}></Route>
        {/* <ProtectedRouting exact path='/' element={<Home/>}></ProtectedRouting> */}

        {/* <Route
path="/"
element={
<ProtectedRouting localS={props.localS}>
<Home />
</ProtectedRouting>
}/> */}
      </Routes>
    </div>
  );
}

export default App;
