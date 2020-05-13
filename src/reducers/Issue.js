// Action Type:
const ADD_ISSUE = 'ADD_ISSUE';
const REMOVE_ISSUE = 'REMOVE_ISSUE';

// Action Creators:
export function addIssue(issue) {
  return { type: 'ADD_ISSUE', payload: issue };
}

export function removeIssue(issue) {
  return { type: 'REMOVE_ISSUE', payload: issue };
}

const initialData = {
  1: { id: 1, title: 'title1', status: 'status1', description: '', createBy: '' },
  2: { id: 2, title: 'title2', status: 'status2', description: '', createBy: '' },
  3: { id: 3, title: 'title3', status: 'status3', description: '', createBy: '' },
};

const initialState = {
  index: Object.values(initialData).length,
  data: initialData,
};

export default function IssueReducer(state = initialState, action) {
  let newState = { ...state };
  const { issue, status, id } = action.payload || {};
  switch (action.type) {
    case ADD_ISSUE: {
      newState.index++;
      newState.data[newState.index] = { id: newState.index, issue, status };
      return { ...newState };
    }
    case REMOVE_ISSUE: {
      let newData = { ...newState.data };
      delete newData[id];
      return {
        ...newState,
        data: newData,
      };
    }
    default: {
      return state;
    }
  }
}
