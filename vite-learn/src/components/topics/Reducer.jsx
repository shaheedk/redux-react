import { useReducer } from "react"

const initialState=0;
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state+1;
      case 'decrement':
        return state-1;
        case 'reser':
          return initialState;
          default:
            return state;
  }
}
function Reducer() {
  return (
    <div>
      <button>+</button>
      <button>-</button>
      <button>reset</button>
    </div>
  )
}

export default Reducer
