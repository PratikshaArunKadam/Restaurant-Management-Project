import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {} from '@fortawesome/fontawesome-svg-core';
import './Navigation.css';

import {faListAlt } from  '@fortawesome/free-regular-svg-icons';
import { faAdd,faHouseChimney, faMagnifyingGlass, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navigation=()=>{
  const localS=localStorage.getItem('login');
    return(
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <Link to="/"> <FontAwesomeIcon icon={faHouseChimney}></FontAwesomeIcon> Home </Link></Nav.Link>
            <Nav.Link href="#search">  <Link to="/search"> <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> Search</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> Create</Link></Nav.Link>
           
            <Nav.Link href="#list"><Link to="/list"><FontAwesomeIcon icon={faListAlt}/> Lists </Link></Nav.Link>
            {
             

              localS ? 
                
                <Nav.Link href="#list"><Link to="/logout"><FontAwesomeIcon icon={faUserAlt}/> Logout </Link></Nav.Link>
                : 
                <Nav.Link href="#list"><Link to="/login"><FontAwesomeIcon icon={faUserAlt}/> Login </Link></Nav.Link>
            }
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Navigation;