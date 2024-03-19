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
        <div>
            <div style={{ paddingLeft: "2%" }}>
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
            <hr style={{ padding: "0%", border: "2px solid" }} />
            <div style={{ paddingLeft: "2%" }}>
                <h2 style={{ margin: "0%", fontFamily: "monospace" }}>ADD NEW VALUES</h2>
                <div>
                    <label>Country Name:</label>
                    <br />
                    <input type='textbox' value={countryName} onChange={(e) => { setCountryName(e.target.value) }} />
                </div>
                <div>
                    <label>Country Code:</label>
                    <br />
                    <input type='textbox' value={countryCode} onChange={(e) => { setCountryCode(e.target.value) }} />
                </div>
                <button onClick={handleSubmit} disabled={countryCode.length === 0 || countryName.length === 0}>Submit</button>
            </div>
        </div>
    );
}

export default Main