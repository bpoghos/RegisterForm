import { Navbar, Container, Nav, InputGroup, Form, Button, FormControl } from "react-bootstrap"


const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Navbar.Brand href="#">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="my-navbar"/>
            <Navbar.Collapse id="my-navbar">
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>

                <div className="ml-auto d-flex">
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="Search" className="mr-sm"/>
                        <Button variant="outline-success">Search</Button>
                        <Button variant="primary">Login</Button>
                        <Button variant="secondary">Register</Button>
                    </Form>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header