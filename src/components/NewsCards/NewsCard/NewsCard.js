import { Card, Col, Container, Row } from "react-bootstrap"





const NewsCard = ({image, title, text}) => {
    return(
       <div>
        <Container>
            <Row>
                <Col md={4}>
                <Card>
                    <Card.Img src={image}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
       </div>
    )
}

export default NewsCard