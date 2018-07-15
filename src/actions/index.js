import { ADD_BOOK, DELETE_BOOK } from '../constants';

export const addBook = (title, author, page) => {
  console.log(title, author, page)
  const action = {
    type: ADD_BOOK,
    title,
    author,
    page
  }

  return action;
}

export const deleteBook = (id) => {
  const action = {
    type: DELETE_BOOK,
    id
  }

  return action;
}