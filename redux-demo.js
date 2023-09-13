const redux = require('redux'); //importing the redux library

const reducer = (state = { counter: 0}, action) => {
    return {
        counter: state.counter+1 
    }
}; //defining the reducer function
/*This function takes the current state and the action. It returns the new state in form of object.*/ 
const store = redux.createStore(reducer); //defining the central store & mentining that what actually is the reducer function here.

const subscriber = () => {
    const latestState = store.getState(); //it is triggered whenever the state changes & helps to get the latest snapshot of it.
    console.log(latestState);
}

store.subscribe(subscriber);

store.dispatch({type: 'increment'});