import React from 'react'

const SearchItem = ({setFilterData, filterData}) => {
  return (
    <div>
        <input type='text' value={filterData} placeholder='Search...' onChange={(e) => { setFilterData(e.target.value) }} />
    </div>
  )
}

export default SearchItem