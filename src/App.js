import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "./store";

function App() {

    const counter = useSelector(state => state.counter); // Bind part of the redux store
    const dispatch = useDispatch(); // send actions to the store.
    const increment = () => {
        dispatch(actions.increment());
    };
    const decrement = () => {
        dispatch(actions.decrement());
    };
    const addBy = () => {
      dispatch(actions.addBy(10));
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
