import {connect} from 'react-redux';
import Book from '../components/Book';
import {addBook, removeBook, editBook} from '../actions'

const mapDispatchToProps = dispatch => ({
  addBook: (addedBook) => dispatch(addBook(addedBook)),
  removeBook: (id) => dispatch(removeBook(id)),
  editBook: (id) => dispatch(editBook(id))

});

export default connect(null, mapDispatchToProps)(Book);
