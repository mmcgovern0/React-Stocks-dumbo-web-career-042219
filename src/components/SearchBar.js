import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="button" value="Alphabetically" checked={null} onClick={() => props.sortStocks("alpha")}/>
      </label>
      <label>
        <input type="button" value="Price" checked={null} onClick={() => props.sortStocks("num")}/>
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filter(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
