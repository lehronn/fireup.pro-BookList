import {connect} from 'react-redux';
import BookForm from '../components/BookForm';
import {addBook, removeBook, editBook} from '../actions'

const mapDispatchToProps = dispatch => ({
  addBook: (addedBook) => dispatch(addBook(addedBook))
});

export default connect(null, mapDispatchToProps)(BookForm);
