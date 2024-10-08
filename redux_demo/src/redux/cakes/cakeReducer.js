// import { Buy_CAKE } from "./cakeType"

// const initialState={
//     numOfCakes:10
// }

// const cakeReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case Buy_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         default:return state
//     }
// }

// export default cakeReducer

import { BUY_CAKE } from './cakeType'

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: 
            return state
    }
}

export default cakeReducer
