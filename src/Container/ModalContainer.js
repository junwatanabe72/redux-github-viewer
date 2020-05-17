import { connect } from 'react-redux';
import ModalWindow from '../components/Organisms/ModalWindow';

const mapStateToProps = (state) => {
  return {
    show: state.ModalR.show,
    component: state.ModalR.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
