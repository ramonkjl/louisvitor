import React, { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Divona = styled.div`
//margin-top: 5px;
.navbar-brand, .nav-link{
    cursor: pointer;
}
`;

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const router = useRouter();
  
    return (
      <Divona>
        <Navbar color="light" light expand="md">
          <NavbarBrand onClick= { ()=> router.push('/') }> <img id="logoTipo" src="/logo.png"/> </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
             <Nav className="mr-auto navDireita" navbar>
              <NavItem>
                {/* <NavLink  > Portfólio </NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink > Contato </NavLink> */}
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            
            <NavbarText>
                <Nav className="mr-auto navDireita" navbar>
                <NavItem>
                    <NavLink onClick={ ()=> router.push("/portfolio") } >Portfólio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={ ()=> router.push('/contato') } >Contato</NavLink>
                </NavItem>
                </Nav>
            </NavbarText>
          
          </Collapse>
        </Navbar>
      </Divona>
    );
  }
  
  export default Example;