import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/nav.css';

const Navpage = () => {
  return (
    <Navbar className='nav-maincontainer' expand="lg">
      <Container>
        <Navbar.Brand href="/">OzShrooms 🍄</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="foraging">Foraging</Nav.Link>
            <NavDropdown className='nav-dropdown' title="Species" id="basic-nav-dropdown">
              <NavDropdown.Item className='nav-species-item' href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className='nav-species-item' href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className='nav-species-item' href="#action/3.1">Action</NavDropdown.Item>

              {/* <NavDropdown.Divider /> */}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navpage;