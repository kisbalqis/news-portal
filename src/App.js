import "./App.css";
import Navbar from "./Componets/Navbar/Navbar";
import Cards from "./Componets/Card/Cards";
import Searchbar from "./Componets/Searchbar/Searchbars";

import React from "react";

import { useMutation, useQuery, useQueryClient } from "react-query";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Cards />
    </div>
  );
}

export default App;
