import React from 'react';
import ReacThOM from 'react-dom';

// Action Type:
const ADD_ISSUE = 'ADD_ISSUE';
// const REMOVE_TODO = 'REMOVE_TODO'

// Action Creators:
function addIssue(issue) {
  return { type: 'ADD_ISSUE', payload: issue };
}

// function removeTodo(todo) {
//   return { type: 'REMOVE_TODO', payload: todo };
// }

const initialData = {
  1: { issue: 'Issue1', status: 'status1' },
  2: { issue: 'Issue2', status: 'status2' },
  3: { issue: 'Issue3', status: 'status3' },
};

const initialState = {
  index: Object.values(initialData).length,
  data: initialData,
};

export function reducer(state = initialState, action) {
  let newState = { ...state };
  const { issue, status } = action.payload || {};
  switch (action.type) {
    case ADD_ISSUE:
      newState.index++;
      newState.data[newState.index] = { issue, status };
      return newState;
    // case REMOVE_TODO:
    //   let newData = { ...newState.data };
    //   delete newData[id];
    //   return {
    //     ...newState,
    //     data: newData,
    //   };
    default:
      return state;
  }
}
