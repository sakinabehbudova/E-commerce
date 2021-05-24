import React from 'react'
import loading from '../images/loading-1.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h3>Products are loading</h3>
            <img className="loading-gif" src={loading}></img>
        </div>
    )
}
