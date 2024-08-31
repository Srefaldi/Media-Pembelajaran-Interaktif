import {Navbar, Container, Nav} from "react-bootstrap"
import {navLinks} from "../data/index"
import {NavLink} from "react-router-dom"

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">C# Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link)=>{
              return ( 
              <div className="nav-link" key={link.id}>
              <NavLink to={link.path} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>{link.text}</NavLink>
            
              </div>
            );
            } )}
            
          </Nav>
          <div>
            <button>Login</button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
  )
}

export default NavbarComponent