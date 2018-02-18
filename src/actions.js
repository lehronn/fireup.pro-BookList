import uuid from 'uuid'; // import unical id generator

//actions objects
const ADD_BOOK = 'ADD_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

//actions creators
export const addBook = (addedBook) => ({
  type: 'ADD_BOOK',
  id: uuid.v4(),
  title: addedBook.title,
  author: addedBook.author,
  year: addedBook.year,
  genere : addedBook.genere
});

export const editBook = (id) => ({
  type: 'EDIT_BOOK',
  id,
  title,
  author,
  year,
  genere
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id
});
