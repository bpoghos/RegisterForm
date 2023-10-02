import NewsCard from "./NewsCard/NewsCard"

const NewsCards = ({ data }) => {
    return (

        data.map(({ image, title, text, id }) => {
            return <NewsCard image={image} title={title} text={text} key={id}/>

        })
    )
}

export default NewsCards