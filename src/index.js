import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

// state = reducer(state,action)
// notify the subscribers

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//       id: 1,
//     },
//   });

store.dispatch(bugAdded("Bug1"));

// unsubscribe();

store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
