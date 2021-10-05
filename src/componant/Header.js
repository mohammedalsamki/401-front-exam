import React, { Component } from 'react';
import{Navbar,Nav,Container} from'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
    

 class Header extends Component {
    render() {
        return (
            <>
               {this.props.isAuthenticated ? <>
               <Navbar>
                   <Container>
                       <Navbar.Brand href='home'>{this.props.myName}</Navbar.Brand>
                       <Nav>
                           <Nav.Link tag={Link} to='/home' href='/home'>Home </Nav.Link>
                           <Nav.Link tag={Link} to='/Fav' href='/Fav'>Fav </Nav.Link>
                           <LogoutButton/>
                       </Nav>
                   </Container>
               </Navbar>
               </>
                : 
                <>
                <Navbar>
                   <Container>
                   <Navbar.Brand href='home'>exam</Navbar.Brand>
                       <Nav>
                           
                           <LoginButton/>
                       </Nav>
                   </Container>

                </Navbar>
                </>
            } 
            </>
        )
    }
}


export default Header