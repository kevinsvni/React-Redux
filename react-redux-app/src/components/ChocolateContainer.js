import React, {useState} from 'react'
import { buyChocolate } from '../redux'
import { connect } from 'react-redux'

function ChocolateContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h3>Number of chocolates - {props.numOfChocolates}</h3>
        <input type='number' value={number} onChange={e=>setNumber(e.target.value)} />
        <button onClick={() => props.buyChocolate(number)}>Buy {number} Chocolates</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfChocolates: state.chocolate.numOfChocolates
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyChocolate: number => dispatch(buyChocolate(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChocolateContainer)