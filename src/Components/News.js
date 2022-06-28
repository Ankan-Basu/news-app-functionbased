import { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  // const [country, setCountry] = useState(props.country);
  const [totResults, setTotResults] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      let apiKey = props.apiKey;

      let pageSize = props.pageSize;

      setLoading(true);

      let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category.toLowerCase()}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;

      props.setProgress(10);
      let resp = await fetch(apiUrl);
      props.setProgress(30);
      let respJson = await resp.json();
      props.setProgress(60);
      let newArticles = respJson.articles;
      props.setProgress(80);


      setArticles(articles.concat(newArticles));
      setPage(page + 1);
      setLoading(false);
      setTotResults(respJson.totalResults);

      props.setProgress(100);
    }

    fetchData();
  }, []);


  const fetchMoreData = async () => {
    let apiKey = props.apiKey;
    let pageSize = props.pageSize;

    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category.toLowerCase()}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;

    let resp = await fetch(apiUrl);
    let respJson = await resp.json();
    let newArticles = respJson.articles;

    setArticles(articles.concat(newArticles));
    setPage(page + 1);
    setLoading(false);

    return respJson;
  }


  return (
    <>
      <div className="mb-8">
        <h1 className="text-center font-bold text-3xl mt-16 mb-5">Top Headlines - {props.category}</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={(articles.length < totResults)}
          loader={<Loading />}
        >
          {loading && <Loading />}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 justify-items-center">

            {articles.map((article) => {
              return (
                <Card title={article.title} desc={article.description} imgUrl={article.urlToImage} newsUrl={article.url} time={article.publishedAt} key={Math.random()} />
              );
            }
            )}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default News;