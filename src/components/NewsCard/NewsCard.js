import { Card } from 'react-bootstrap'


const NewsCard = ({ news, onNews }) => {



    


    return (


        <Card className='mb-4'>
            <Card.Img onClick={onNews} src={news.image} />
            <Card.Body>
                <Card.Title onClick={onNews}>{news.title}</Card.Title>
                <Card.Text onClick={onNews}>{news.text}</Card.Text>
            </Card.Body>
        </Card>



    )
}

export default NewsCard