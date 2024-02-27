import React from 'react';
import { CiFilter } from "react-icons/ci";

const header = ({ title, filterItem, setFilterItem, filterList, toggleFilter, showFilterField, setShowFilterField }) => {
  return (
    <header>
      <div className='head'>
        <h1>{title}</h1>
        <span><CiFilter onClick={() => toggleFilter()} /></span>
      </div>
      {showFilterField &&
        <input type='text'
          placeholder='Search Tasks here..'
          value={filterItem}
          className='filter-input'
          onChange={(e) => filterList(e.target.value)}
          id="search"
          role="searchbox"
        />}
    </header>
  )
}

export default header