import { createStore } from 'redux';

const initialData = {
  1: { id: 1, text: 'brush a tooth' },
  2: { id: 2, text: 'wash a face' },
  3: { id: 3, text: 'drink a coffee' },
};

const initalState = {
  index: Object.values(initialData).length,
  data: initialData,
};

const reducer = (state = initalState, action) => {};
