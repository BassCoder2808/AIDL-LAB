import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    //NavbarText
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
      
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand className="nav-link"  to='/home' style={{fontSize: "0.8rem"}}>AI-Deep Learning Virtual Labs: AI Made Easy</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link"  to='/home'>Home</NavLink>
              </NavItem>
              <NavItem divider/>
              <NavItem>
                <NavLink className="nav-link"  to='/experiments'>Experiments</NavLink>
              </NavItem>
              {/* <NavItem >
                <NavLink className="nav-link"  to='/simulation'>Simulation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"  to='/test' >Test</NavLink>
              </NavItem> */}
              
            </Nav>
             
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>

      </div>
    );

}

export default Header;

// just for future ref

 {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  Experiments
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem>
                      Exp 1
                      </DropdownItem>
                      <DropdownItem>
                      Exp 2
                      </DropdownItem> */}
                      {/* <DropdownItem divider /> */}
                      {/* <DropdownItem>
                      Exp 3
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown> */}