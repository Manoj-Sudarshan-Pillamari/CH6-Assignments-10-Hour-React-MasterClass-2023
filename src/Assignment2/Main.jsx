import React, { useState } from 'react'

const itemsList = ['India', 'China', 'USA', 'Australia', 'Brazil'];

const Main = () => {
    const [filterData, setFilterData] = useState("");

    const filteredItems = itemsList.filter((item) =>
        typeof item === 'string' && item.toLowerCase().includes(filterData.toLowerCase()))

    return (
        <div style={{ border: "5px solid blue", padding: "2%" }}>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>Assignment 2</h1>
            <input type='text' value={filterData} placeholder='Search...' onChange={(e) => { setFilterData(e.target.value) }} />
            <ul>
                {filteredItems.map((item) => { return (<li key={item}>{item}</li>) })}
            </ul>
        </div>
    )
}

export default Main