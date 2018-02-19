import {connect} from 'react-redux';
import BookForm from '../components/BookForm';
import {addBook, removeBook, editBook} from '../actions'

const mapDispatchToProps = dispatch => ({
  addBook: (addedBook) => dispatch(addBook(addedBook)),
  removeBook: (id) => dispatch(removeBook(id)),
  editBook: (id) => dispatch(editBook(id))

});

export default connect(null, mapDispatchToProps)(BookForm);
