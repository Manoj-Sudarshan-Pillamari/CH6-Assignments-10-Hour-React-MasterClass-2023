import React from 'react'
import { useState } from 'react';

const nations = [
    { name: 'India', value: 'IN' },
    { name: 'America', value: 'US' },
    { name: 'Bangladesh', value: 'BG' },
]

const Main = () => {
    const [addNation, setAddNation] = useState(nations);
    const [countryName, setCountryName] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const handleNationChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = () => {
        setAddNation(prevData => [...prevData, { name: countryName, value: countryCode }])
        setCountryName("");
        setCountryCode("");
    }

    return (
        <div style={{border:"5px solid green",padding:"2%"}}>
            <h1 style={{textAlign:"center", fontSize:"30px", margin:"0%"}}>Assignment 1</h1>
            <div>
                <label>Nation</label>
                <br />
                <select onChange={handleNationChange}>
                    <option value="">--- Select Nation ---</option>
                    {addNation.map((data) => {
                        return (
                            <option value={data.name} key={data.value}>{data.name}</option>
                        )
                    })}
                </select>
            </div>
            <hr style={{ padding: "0%", border: "1px solid" }} />
            <div>
                <h2 style={{ margin: "0%", fontFamily: "monospace" }}>ADD NEW VALUES</h2>
                <div>
                    <label>Country Name:</label>
                    <br />
                    <input type='text' value={countryName} onChange={(e) => { setCountryName(e.target.value) }} />
                </div>
                <div>
                    <label>Country Code:</label>
                    <br />
                    <input type='text' value={countryCode} onChange={(e) => { setCountryCode(e.target.value) }} />
                </div>
                <button style={{marginTop:"2%"}} onClick={handleSubmit} disabled={countryCode.length === 0 || countryName.length === 0}>Submit</button>
            </div>
        </div>
    );
}

export default Main