/** @format */
import { IMAGES } from "../../assets/images";
import "../../assets/style/salman.css";
import {
  Form,
  Button,
  NavDropdown,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar className="navbaar-sticky py-3" bg="white" expand="lg">
      <Container className="text-items" fluid>
        <Navbar className="Logo mx-5 " href="#">
        <img src={IMAGES.FULLSCRIPR}></img>
        </Navbar>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto set-height  pl-4 pr-4"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              className="Our-platform"
              title="Our platform"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="Our-platform text-black mx-3"
              title="Learn"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="Our-platform"
              title="Support"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="text-black" href="#action3">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex mx-5">
            <Button className="Create-account-btn mx-4">Sign In</Button>
            <Button className="two-button  ">Create account</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
