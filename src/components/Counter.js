import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  
  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement'});
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <hr className={classes.hrLine}></hr>
      <div className={classes.value}>{counter}</div>
      <hr className={classes.hrLine}></hr>
      <div className={classes.buttons}>
  <button onClick={incrementHandler}>Increment</button>
  <button onClick={toggleCounterHandler}>Toggle Counter</button>
  <button onClick={decrementHandler}>Decrement</button>
</div>
      
    </main>
  );
};

export default Counter;
