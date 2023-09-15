import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <hr className={classes.hrLine}></hr>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <hr className={classes.hrLine}></hr>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
