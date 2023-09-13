const redux = require('redux');//importing the redux library

//defining the reducer function
/*This function takes the current state and the action. It returns the new state in form of object.*/ 
const reducer = (state = {counter:0}, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
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

// Increase the counter by 5 by dispatching "increment" action 5 times
for (let i = 0; i < 5; i++) {
  store.dispatch({ type: 'increment' });
}

// Decrease the counter by dispatching "decrement" action
store.dispatch({ type: 'decrement' });
