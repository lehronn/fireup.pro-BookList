import { ADD_BOOK, EDIT_BOOK, REMOVE_BOOK } from '../actions.js';

function Books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return console.log('test');
    case REMOVE_BOOK:
      return
      state.filter(book => book.id !== action.id);
    // case EDIT_BOOK:
    //     return book;
    //   });

    default:
      return state;
  }
};

export default Books;
