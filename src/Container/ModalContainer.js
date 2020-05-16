import { connect } from 'react-redux';
import { modalPop } from '../reducers/Modal';
import ModalWindow from '../components/Organisms/ModalWindow';
const mapStateToProps = (state) => {
  return {
    show: state.ModalR.show,
    component: state.ModalR.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalPop: (e) => dispatch(modalPop(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
