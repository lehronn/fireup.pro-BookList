import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm';
import style from './Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.dir(this.props);
    return (
      <div className={style.bookList}>
        <span>
          {this.props.title} - {this.props.author} - {this.props.year} - {this.props.genere}
          <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          <button className="removeButton" onClick={()=> this.props.edit(item.id)}>Edit</button>
        </span>
      </div>
    );
  }
}

// Book.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

export default Book;
