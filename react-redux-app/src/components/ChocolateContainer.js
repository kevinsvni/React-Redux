import React from 'react'
import { buyChocolate } from '../redux'
import { connect } from 'react-redux'

function ChocolateContainer(props) {
  return (
    <div>
        <h3>Number of chocolates - {props.numOfChocolates}</h3>
        <button onClick={props.buyChocolate}>Buy Chocolate</button>
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
        buyChocolate: () => dispatch(buyChocolate())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChocolateContainer)