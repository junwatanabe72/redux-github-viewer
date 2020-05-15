import { connect } from 'react-redux';
import Profile from '../components/Organisms/Profile';
const mapStateToProps = (state) => {
  return {
    UserData: state.UserR,
  };
};

export default connect(mapStateToProps)(Profile);
