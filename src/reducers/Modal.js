// Action Type:
const MODAL_PUSH = 'MODAL_PUSH';
const MODAL_POP = 'MODAL_POP';

// Action Creators:
export function modalPush() {
  return { type: 'MODAL_PUSH' };
}

export function modalPop() {
  return { type: 'MODAL_POP' };
}

const initialState = {
  show: true,
};

export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_PUSH:
      return { show: true };
    case MODAL_POP:
      return {
        show: false,
      };
    default:
      return state;
  }
}

// export default function Modalreducer(state = initialState, action) {
//   let newState = { ...state };
//   // const { show } = action.payload || {};
//   switch (action.type) {
//     case MODAL_PUSH:
//       newState.show = true;
//       return newState;
//     case MODAL_POP:
//       newState.show = false;
//       return newState;
//     default:
//       return state;
//   }
// }
