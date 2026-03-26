import React, {useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) =>  { 
  const [articles , setArticles] = useState([]);
  const [page , setPage] = useState(1);
  const [loading , setLoading] = useState(true);
  const [totalResults , settotalResults] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);


  const Update = async () => {
    props.setProgress(10)
    let Url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&page=${page}&apiKey=de9457df364a4078b20a2f3ab46262a5&pageSize=7`;
              props.setProgress(30)

  setLoading(true);
  let data = await fetch(Url);
  let parseData = await data.json();
      props.setProgress(70)

     setArticles(parseData.articles) ;
     settotalResults(parseData.totalResults);
     setLoading(false)
      props.setProgress(100)
  }

  useEffect(() => {
    Update();
  },[])

const fetchMoredata = async () => {
  setLoadingMore(true);
   let Url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&page=${page + 1}&apiKey=de9457df364a4078b20a2f3ab46262a5&pageSize=9`;
  let data = await fetch(Url);
  let parseData = await data.json();
  setArticles(articles.concat(parseData.articles))
  settotalResults(parseData.totalResults);
  setPage(page + 1);
  setLoadingMore(false);

}
        
    const capital = (word) => {
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    document.title = `NewsWala - ${capital(props.category)} News`
    return(
      
      <>
        <h2 className="text-center fw-bolder" style={{marginTop: "90px"}}>NewsWala - {capital(props.category)} News</h2>
     { loading ? (
      <Spinner/>
     ):
      <InfiniteScroll
          dataLength={articles.length} 
          next={fetchMoredata}
          hasMore={articles.length < totalResults && totalResults > 0}
          loader={loadingMore ? <Spinner /> : null}
          >
            <div className="container">

        <div className="row my-4">
         {articles.map((e) => {
          return <div className="col-md-4" key={e.url}>
            
<NewsItem
  title={e.title} url={e.url} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}
/>
          </div>
         })}
        </div>
        </div>
        </InfiniteScroll>
        }
      </>
    )
  }
export default News;

News.defaultProps = {
    country : "us",
    category : "general"
  }
  News.propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
  }
