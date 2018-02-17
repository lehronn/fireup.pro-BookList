import { ADD_BOOK, EDIT_BOOK, REMOVE_BOOK } from '../actions.js';

function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [{
        id: action.id,
        title: action.title,
        author: action.author,
        year: action.year,
        genere: action.genere
      },
      ...state
      ];
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

export default books;
