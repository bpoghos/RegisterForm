import { Card } from "react-bootstrap"

const FullNews = () => {
    return (
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text>full text</Card.Text>
                <Card.Text>date</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FullNews