import { ADD_ISSUE, UPDATE_ISSUE, REMOVE_ISSUE } from '../actions/index';

const date = new Date();
const format = 'MM-DD-YYYY';
const sampleDate = (date, format) => {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());

  return format;
};
const createDate = sampleDate(date, format).toString();

const status = {
  open: 'open',
  close: 'close',
};

const initialData = {
  1: {
    id: 1,
    title: 'title1',
    status: status.open,
    description: '',
    createBy: createDate,
    update: createDate,
  },
  2: {
    id: 2,
    title: 'title2',
    status: status.open,
    description: '',
    createBy: createDate,
    update: createDate,
  },
  3: {
    id: 3,
    title: 'title3',
    status: status.open,
    description: '',
    createBy: createDate,
    update: createDate,
  },
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
    //update作成
    case UPDATE_ISSUE: {
      newData[issue.id] = { ...issue };
      return { ...state, data: newData };
    }
    default: {
      return state;
    }
  }
}
