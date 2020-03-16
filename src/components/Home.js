import React from 'react'

export default function Home(props) {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h2>PS4 sale: 50</h2>
            <button className="ps4Button" onClick={props.addToBasket}>Add PS4 to Basket</button>
        </div>
    )
}
