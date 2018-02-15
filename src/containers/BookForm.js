import {connect} from 'react-redux';
import Book from '../Book';
import {addBook} from '../actions'
import {editBook} from '../actions'
import {removeBook} from '../actions'

const mapDispatchToProps = dispatch => ({
  addBook: (id) => dispatch(addBook(id)),
  editBook: (id) => dispatch(editBook(id))
  removeBook: (id) => dispatch(removeBook(id))
});

export default connect(null, mapDispatchToProps)(Book);
