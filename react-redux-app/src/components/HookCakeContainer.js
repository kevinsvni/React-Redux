import React from 'react'
import { useSelector } from 'react-redux'

function HookCakeContainer() {
    const numOfCakes  = useSelector(state => state.numOfCakes)
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button >Buy Cakes</button>
        </div>
    )
}

export default HookCakeContainer