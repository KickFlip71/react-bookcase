import { bake_cookie, read_cookie } from 'sfcookies'
import { ADD_BOOK, DELETE_BOOK, CLEAR_BOOKS } from '../constants'

const book = (action) => {
  return {
    title: action.title,
    author: action.author,
    page: action.page,
    date: action.date,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const books = state.filter(book => book.id !== id)
  return books
}


const books = (state = [], action) => {
  let books = null
  state = read_cookie('books')
  switch(action.type) {
    case ADD_BOOK:
      books = [...state, book(action)]
      bake_cookie('books', books)
      return books;
    case DELETE_BOOK:
      books = removeById(state, action.id)
      bake_cookie('books', books)
      return books;
    case CLEAR_BOOKS:
      books = []
      bake_cookie('books', books)
      return books;
    default:
      return state
  }

}

export default books;