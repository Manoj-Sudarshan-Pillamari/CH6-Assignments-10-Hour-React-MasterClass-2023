import React, { useState } from 'react'
import ListItems from './ListItems'
import SearchItem from './SearchItem'

const itemsList = ['India', 'China', 'USA', 'Australia', 'Brazil'];

const Main = () => {
    const [filterData, setFilterData] = useState("");

    const filteredItems = itemsList.filter((item) =>
        typeof item === 'string' && item.toLowerCase().includes(filterData.toLowerCase()))

    return (
        <div style={{ border: "5px solid orange", padding: "2%" }}>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>Assignment 2.1</h1>
            <label style={{fontSize:"18px", fontStyle:"italic",fontWeight:"bold"}}>Used separate components</label>
            <SearchItem filterData={filterData} setFilterData={setFilterData} />
            <ListItems filteredItems={filteredItems} />
        </div>
    )
}

export default Main