import {connect} from 'react-redux';
import Book from '../components/Book';
import {addBook, removeBook, editBook} from '../actions'

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  removeBook: (id) => dispatch(removeBook(id)),
  editBook: (editedBook) => dispatch(editBook(editedBook))
});

export default connect (mapStateToProps, mapDispatchToProps) (Book);
