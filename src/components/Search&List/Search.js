import React, { useState } from "react";
import "./Search.css";

function SearchComponent({ handleEvent, data, handleInput }) {
  let [search, setSearch] = useState("");
  //handleInputChange
  let handleInputChange = (e) => {
    let target = e.target.value.toLowerCase();
    setSearch(target);
    //let target = e.target.value.toLowerCase();
    let matches = data.filter((item) =>
      item.name.toLowerCase().includes(target)
    );
    handleInput(matches);
  };

  //handleChangeEvent
  let handleChangeEvent = (e) => {
    let value = e.target.value === "true" ? true : false;
    handleEvent(value);
  };
  return (
    <article className="search-container">
      <section>
        <label htmlFor="Search">Search</label>
        <br />
        <input
          id="Search"
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </section>
      <section>
        <label htmlFor="Search">Search</label>
        <br />
        <div class="select">
          <select
            id="Search"
            className="selectTag"
            placeholder="Select Type"
            onChange={handleChangeEvent}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </section>
    </article>
  );
}

export default SearchComponent;
