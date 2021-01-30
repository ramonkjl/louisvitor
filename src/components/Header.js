
import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
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

      <Navbar className="essaAqui" color="light" light expand="md">
        <NavbarBrand onClick={() => router.push('/')}> <img id="logoTipo" src="/logo.png" /> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={() => router.push("/portfolio")} >Portfólio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => router.push('/contato')} >Contato</NavLink>
              </NavItem>
            </Nav>
{/*             <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav> */}
          </NavbarText>

        </Collapse>
      </Navbar>

    </Divona>
  );
}

export default Example;