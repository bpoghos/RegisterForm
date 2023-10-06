import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header";
import NewsCard from "../NewsCard";
import UserCard from "../UserCard";
import FullNews from "../FullNews";


const App = () => {

  

  const data = [
    {
      image: '/static/images/image1.webp',
      title: 'Test News',
      text: 'text content 1',
      id: 1,
      fullText: 'full text content 1',
      pubDate: '17.03.2022'
    },
    {
      image: '/static/images/image2.jpeg',
      title: 'Test News',
      text: 'text content 2',
      id: 2,
      fullText: 'full text content 2',
      pubDate: '25.02.2021'
    },
    { 
      image: '/static/images/image3.avif', 
      title: 'Test News', 
      text: 'text content 3', 
      id: 3,
      fullText: 'full text content 3',
      pubDate: '10.03.2023'
     },
  ]

  const onNews = () => {
    
  }



  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          {data.map((n) => {
            return (
              <Col lg={3} md={4} sm={6} key={n.id}>
                <NewsCard news={n} onNews={onNews}/>
              </Col>
            )
          })}

        </Row>
        <Row>
          <FullNews data={data}/>
        </Row>
      </Container>
      
     



      {/* <Container>
        <Row>
          <Col lg={3}>
            <UserCard />
          </Col>
        </Row>
      </Container> */}
      <footer className="bg-dark text-white p-3 text-center">
        <Container>
          &copy; 2023 News portal, All Rights Reserved
        </Container>
      </footer>
    </div>

  );
}

export default App





