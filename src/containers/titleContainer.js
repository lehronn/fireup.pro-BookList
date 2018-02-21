import {connect} from 'react-redux';
import Title from '../components/Title';

const mapStateToProps = state => ({
  books: state
});

export default connect (mapStateToProps) (Title);
