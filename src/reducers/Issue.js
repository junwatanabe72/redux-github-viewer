// Action Type:
const ADD_ISSUE = 'ADD_ISSUE';
const REMOVE_ISSUE = 'REMOVE_ISSUE';

// Action Creators:
export function addIssue(issue) {
  return { type: 'ADD_ISSUE', payload: { issue } };
}

export function removeIssue(issue) {
  return { type: 'REMOVE_ISSUE', payload: { issue } };
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
  let { index, data } = state;
  const { issue } = action.payload || {};
  const newData = { ...data };
  const id = index + 1;
  switch (action.type) {
    case ADD_ISSUE: {
      newData[id] = { ...issue, id };
      return { ...state, index: id, data: newData };
    }
    case REMOVE_ISSUE: {
      for (let key in issue) {
        delete newData[key];
      }
      return {
        ...state,
        data: newData,
      };
    }
    default: {
      return state;
    }
  }
}
