import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import HeaderComponent from "./components/Header/Header";
import CoverComponent from "./components/Cover/Cover";
import SearchComponent from "./components/Search&List/Search";
import ListComponent from "./components/Search&List/List";

function App() {
  let [data, setData] = useState([]);
  let [bool, setBool] = useState(true);

  useEffect(() => {
    let apiCall = async () => {
      let response = await axios.get(
        "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=8"
      );
      setData(response.data.events);
    };

    apiCall();
  }, []);

  let handleEvent = (childData) => {
    console.log(childData);
    //filter
    // let filter = data.filter((item) => item.is_virtual === childData);
    // console.log(filter);
    // setData(filter);
    setBool(childData);
  };

  let handleInput = (childInput) => {
    setData(childInput);
  };

  return (
    <div className="App">
      <HeaderComponent />
      <br />
      <br />
      <CoverComponent />
      <SearchComponent
        handleEvent={handleEvent}
        handleInput={handleInput}
        data={data}
      />
      <ListComponent data={data} bool={bool} />
    </div>
  );
}

export default App;
