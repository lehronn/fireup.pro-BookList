import {connect} from 'react-redux';
import BookList from '../components/BookList';

const mapStateToProps = state => ({
  books: state.books
});

export default connect (mapStateToProps) (BookList);
