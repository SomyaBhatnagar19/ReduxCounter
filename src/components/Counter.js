import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';
/*FUNCTIONAL COMPONENT*/
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
/*CLASS-BASED COMPONENT*/
// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){

//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <hr className={classes.hrLine}></hr>
//         <div className={classes.value}>{counter}</div>
//         <hr className={classes.hrLine}></hr>
//         <div className={classes.buttons}>
//     <button onClick={this.incrementHandler.bind(this)}>Increment By 5</button>
//     <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     <button onClick={this.decrementHandler.bind(this)}>Decrement By 5</button>
//   </div>
        
//       </main>
//     );
//     const mapStateToProp = state => {
//       return {
//         counter: state.counter
//       }
//     }
//     const mapDispatchToProps = dispatch => {
//       return {
//         increment: () => dispatch({type: 'increment'})
//         decrement: () => dispatch({type: 'decrement'})
//       }
//     }
//   }
// }
// export default connect(mapStateToProp)(Counter);
