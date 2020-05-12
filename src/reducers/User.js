const initialState = {
  name: 'junwatanabe',
  email: 'junwatanabe72@gmail.com',
  profileUrl:
    'https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4',
};

export default function UserReducer(state = initialState, action) {
  // let newState = { ...state };
  // const { issue, status } = action.payload || {};
  // switch (action.type) {
  //   case ADD_ISSUE:
  //     newState.index++;
  //     newState.data[newState.index] = { id: newState.index, issue, status };
  //     return { ...newState };
  // case REMOVE_TODO:
  //   let newData = { ...newState.data };
  //   delete newData[id];
  //   return {
  //     ...newState,
  //     data: newData,
  //   };
  return state;
}
