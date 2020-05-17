import { connect } from 'react-redux';
import { modalPush, modalPop } from '../reducers/Modal';
import { addIssue, updateIssue, removeIssue } from '../reducers/Issue';
import Issue from '../components/Organisms/Issue';

function mapStateToProps(state) {
  return {
    data: state.IssueR.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalPush: (e) => dispatch(modalPush(e)),
    modalPop: (e) => dispatch(modalPop(e)),
    deleteIssue: (e) => dispatch(removeIssue(e)),
    createIssue: (e) => dispatch(addIssue(e)),
    changeIssue: (e) => dispatch(updateIssue(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
