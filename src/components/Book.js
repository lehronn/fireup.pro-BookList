import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm';
import style from './Book.css';

class Book extends React.Component {
  constructor(props, id, author, title, genere, year) {
    super(props);
  }

  render() {
    return (
      <div className={style.bookList}>
        {this.props.data.map(item => (
          <span>
            {item.text}
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </span>
        ))}
      </div>
    );
  }
}

// Book.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

export default Book;
