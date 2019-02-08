import { createStore } from 'redux'

// Action Generator

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const storeReducers = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(storeReducers);

store.dispatch(incrementCount());
console.log(store.getState());

store.dispatch(decrementCount({ decrementBy: 90 }));

console.log(store.getState());

store.dispatch(resetCount());
console.log(store.getState());



