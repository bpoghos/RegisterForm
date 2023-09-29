import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"

const MainCards = () => {
    return (
        <Container>
            <Row className="justify-content-md-center mb-4">
                <Col xs={3}>
                    <Card className="shadow-sm">
                        <Card.Header className="text-center py-3">
                            <h4 className="my-0 fw-normal">Free</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center">
                                <h1>$0<small className="text-body-secondary fw-light">/mo</small></h1>
                            </Card.Title>
                            <Card.Text className="text-center">
                                <ListGroup className="mt-3 mb-4" >
                                    <ListGroupItem className='border-0 p-0'>10 users included</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>2 GB of storage</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>Email support</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>Help center access</ListGroupItem>
                                </ListGroup>
                            </Card.Text>
                            <Button variant="outline-primary" size="lg" className="w-100">
                            Sign up for free
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card className="shadow-sm">
                        <Card.Header className="text-center py-3">
                            <h4 className="my-0 fw-normal">Pro</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center">
                                <h1>$15<small className="text-body-secondary fw-light">/mo</small></h1>
                            </Card.Title>
                            <Card.Text className="text-center">
                                <ListGroup className="mt-3 mb-4">
                                    <ListGroupItem className='border-0 p-0'>20 users included</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>10 GB of storage</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>Priority email support</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>Help center access</ListGroupItem>
                                </ListGroup>
                            </Card.Text>
                            <Button variant="primary" size="lg" className="w-100">
                            Get started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card className="shadow-sm border-primary">
                        <Card.Header className="text-center py-3 text-bg-primary">
                            <h4 className="my-0 fw-normal">Enterprise</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="text-center">
                                <h1>$29<small className="text-body-secondary fw-light">/mo</small></h1>
                            </Card.Title>
                            <Card.Text className="text-center">
                                <ListGroup className="mt-3 mb-4">
                                    <ListGroupItem className='border-0 p-0'>30 users included</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>15 GB of storage</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>Phone and email support</ListGroupItem>
                                    <ListGroupItem className='border-0 p-0'>Help center access</ListGroupItem>
                                </ListGroup>
                            </Card.Text>
                            <Button variant="primary" size="lg" className="w-100">
                            Contact us
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MainCards