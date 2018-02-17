import {connect} from 'react-redux';
import Book from '../components/Book';
import {addBook, removeBook, editBook} from '../actions'

const mapDispatchToProps = dispatch => ({
  addBook: (title, author, year, genere) => dispatch(addBook(title, author, year, genere)),
  removeBook: (id) => dispatch(removeBook(id)),
  editBook: (id) => dispatch(editBook(id))

});

export default connect(null, mapDispatchToProps)(Book);
