import {connect} from 'react-redux';
import BookForm from '../components/BookForm';
import {addBook, removeBook, editBook} from '../actions'

const mapDispatchToProps = dispatch => ({
  addBook: (addedBook) => dispatch(addBook(addedBook)),
  removeBook: (id) => dispatch(removeBook(id)),
  editBook: (id, title, author, year, genere) => dispatch(editBook(id, title, author, year, genere))
});

export default connect(null, mapDispatchToProps)(BookForm);
