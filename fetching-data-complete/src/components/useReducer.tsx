import { useReducer } from "react";

interface State {
  count: number;
  error: string | null
}


interface Action {
  type: 'increment' | 'decrement'
}


const reducer = (state: State, actions: Action) => {
  switch (actions.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}







export default function useReducerComponent () {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null
  })



  return (
    <div className='text-center'>
      <h1 className='text-3xl'>Count: {state.count}</h1>
      <button className='mr-2' onClick={()=> dispatch({type: 'decrement'})}>
        Decrement
      </button>
      <button className='ml-2' onClick={()=> dispatch({type: 'increment'})}>
        Increment
      </button>
    </div>
  );
}
