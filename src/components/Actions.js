import uuid from 'uuid'; // import unical id generator

//actions objects
const ADD_BOOK = 'ADD_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

//actions creators
export const addBook = (title, author, year, genere) => ({
  type: 'ADD_BOOK',
  id: v4(),
  title,
  author,
  year,
  genere
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
