import {connect} from 'react-redux';
import BookList from '../BookList';

const mapStateToProps = state => ({
  books: state.books
});

export default connect (mapStateToProps) (BookList);
