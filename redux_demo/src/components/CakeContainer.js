import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
import { connect } from 'react-redux'

function FirstExample(props) {
  return (
    <div>
        <h2>Number of cakes: {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes  // Ensure the spelling matches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())  // Use the correct function name 'buyCake'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstExample)
