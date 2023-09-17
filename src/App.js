import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const counter = useSelector(state => state.counter); // Bind part of the redux store
    const dispatch = useDispatch(); // send actions to the store.
    const increment = () => {
        dispatch({type:"INC"});
    };
    const decrement = () => {
        dispatch({type:"DEC"});
    };
    const addBy = () => {
      dispatch({type: "ADD", payload: 10})
    }

    return (
        <div>
            <h1>Counter app</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>Add 10</button>
        </div>
    );
}

export default App;
