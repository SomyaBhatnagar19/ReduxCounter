//  Redux code by increment and decrement by 2

const redux = require('redux'); //importing the redux library

//defining the reducer function
/*This function takes the current state and the action. It returns the new state in form of object.*/ 
const reducer = (state = {counter:0}, action) => {
  switch (action.type) {
    case 'incrementBy2':
      return {
        
        counter: state.counter + 2,
      };
    case 'decrementBy2':
      return {
     
        counter: state.counter - 2,
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer); //defining the central store & mentining that what actually is the reducer function here.

const subscriber = () => {
  const latestState = store.getState(); //it is triggered whenever the state changes & helps to get the latest snapshot of it.
  console.log(latestState);
};

store.subscribe(subscriber);

// Increase the counter by 2 by dispatching "increment" action 
  store.dispatch({ type: 'incrementBy2' });


// Decrease the counter by 2 dispatching "decrement" action
store.dispatch({ type: 'decrementBy2' });
