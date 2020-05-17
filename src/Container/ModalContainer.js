import { connect } from 'react-redux';
import { modalPop } from '../reducers/Modal';
import { addIssue } from '../reducers/Issue';
import ModalWindow from '../components/Organisms/ModalWindow';

const mapStateToProps = (state) => {
  return {
    show: state.ModalR.show,
    component: state.ModalR.component,
    data: state.IssueR.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalPop: (e) => dispatch(modalPop(e)),
    createIssue: (e) => dispatch(addIssue(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
