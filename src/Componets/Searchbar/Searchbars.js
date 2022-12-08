import React, { useState } from "react";
import "./Searchbar.css";
import { useQuery } from "react-query";
import axios from "axios";

const Searchbars = () => {
  const [count, setCount] = useState(0);

  async function fetchPosts() {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${count}&country=us&apiKey=90009d14c3e14a68aedffb9629a80052`
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
      <div class="wrap">
        <div class="search">
          <input
            value={count}
            onChange={(e) => setCount(e.target.value)}
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          />
          <button
            type="submit"
            class="searchButton"
            onClick={(e) => fetchPosts()}
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbars;
