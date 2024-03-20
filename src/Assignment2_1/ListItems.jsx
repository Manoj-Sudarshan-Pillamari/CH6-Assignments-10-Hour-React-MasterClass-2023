import React from 'react'

const ListItems = ({ filteredItems }) => {
    return (
        <ul>
            {filteredItems.map((item) => { return (<li key={item}>{item}</li>) })}
        </ul>
    )
}

export default ListItems