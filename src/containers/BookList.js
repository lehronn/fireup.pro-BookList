import {connect} from 'react-redux';
import BookList from '../BookList';

class BookList extends React.Component {
  constructor() {
    super();
    this.state = { books: {}}
  }

export default connect (mapStateToProps) (BookList);
