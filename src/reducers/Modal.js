import React, { Component } from 'react';
// Action Type:
const MODAL_PUSH = 'MODAL_PUSH';
const MODAL_POP = 'MODAL_POP';

// Action Creators:
export function modalPush(argComponent) {
  return { type: 'MODAL_PUSH', payload: { argComponent } };
}

export function modalPop() {
  return { type: 'MODAL_POP', payload: {} };
}

const initialState = {
  show: false,
  component: [],
};

export default function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_PUSH:
      return {
        ...state,
        component: [...state.component, action.payload.argComponent],
        show: true,
      };
    case MODAL_POP:
      return {
        ...state,
        component: state.component.slice(0, -1),
        show: false,
      };
    default:
      return state;
  }
}
