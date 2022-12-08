import React, { useState } from "react";
import "./Cards.css";
import { useQuery } from "react-query";
import axios from "axios";

// const [limit, setLimit] = useState(9);
//   useEffect(() => {
//     data.articles.slice(0,limit)

//  }, [limit]);

const Cards = () => {
  async function fetchPosts() {
    const { data } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=90009d14c3e14a68aedffb9629a80052"
    );
    console.log(data);
    return data.articles;
  }
  const { data, error, isError, isLoading } = useQuery("values", fetchPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div class="body">
      <div class="container">
        {console.log(data)}
        {data.map((value, index) => {
          console.log(value);
          return (
            <div class="wrapper">
              <div class="card">
                <a href={value.url} target="_blank">
                  <div class="head-card">
                    <img src={value.urlToImage} className="img" />
                  </div>
                </a>
                <div class="body-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <p>autor: {value.author}</p>
                  <p>Source: {value.source.name}</p>
                  <p>Post: {value.publishedAt}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
