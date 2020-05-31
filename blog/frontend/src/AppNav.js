import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';


class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Blog">Blog</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Cv">Curriculum Vitae</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Admin">Admin</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/PostManager">PostManager</NavLink>
                  </NavItem>
                
                </Nav>
          
            </Navbar>
          </div>
        );
      }
}
 
export default AppNav;