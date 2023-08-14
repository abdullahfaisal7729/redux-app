let lastId = 0;
import * as actions from "./actionTypes";

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case typeName:
//       return { ...state, ...payload };

//     default:
//       return state;
//   }
// };

// function reducer(state = [], action) {
//   if (action.type === "bugAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === "bugRemoved")
//     return state.filter((bug) => bug.id !== action.payload.id);
//   else return state;
// }

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
};
