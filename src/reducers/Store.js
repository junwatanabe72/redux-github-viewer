import { createStore } from 'redux';

const initalState = {
  1: { issue: 'Issue', status: 'Status', creater: 'Creater', date: 'Date', updateDate: 'Update' },
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        issue: 'Issue1',
        status: 'Status1',
        creater: 'Creater1',
        date: 'Date1',
        updateDate: 'Update1',
      };
    case 'DELETE':
      return {
        issue: 'Issue2',
        status: 'Status2',
        creater: 'Creater2',
        date: 'Date2',
        updateDate: 'Update2',
      };
  }
}

export default createStore(reducer);
