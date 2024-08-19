import { useReducer } from "react"

type State = {
  count: number
  error: string | null
}

type Action = {
  type: 'increment' | 'decrement'
}


function reducer(state: State, action: Action) {

  switch(action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }

}


export default function UseReducerDemo(){
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  })


  return (
    <>
    <div>
      <p>Count: {state.count}</p>
    </div>
    <div>
      <button onClick={()=> {dispatch({type: 'decrement'})}}>Decrement</button>
      <button onClick={()=> {dispatch({type: 'increment'})}}>increment</button>
    </div>
    </>
  )
}
