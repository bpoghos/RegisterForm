import { Navbar, Container, Nav, InputGroup, Form, Button } from "react-bootstrap"


const Header = () => {

    return (
        <Navbar expand="sm" className="ms-auto" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                </Nav>
            </Container>
            <InputGroup >
                <Form.Control
                    placeholder="Search"
                />
                <Button className="me-2" variant="outline-secondary">
                    Search
                </Button>
            </InputGroup>
            <Button className="me-2" variant="outline-secondary">Login</Button>
            <Button className="me-2" variant="warning">Register</Button>
        </Navbar>
    )

}

export default Header