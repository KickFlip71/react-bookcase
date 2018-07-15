import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addBook, deleteBook, clearBooks } from '../actions'
import BookList from './book-list'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      page: ''
    }
  }

  addBook() {
    this.props.addBook(
      this.state.title,
      this.state.author,
      this.state.page,
    )
  }

  deleteBook(id) {
    this.props.deleteBook(id);
  }

  clearBooks() {
    this.props.clearBooks();
  }

  render() {
    return (
      <div className='App container'>
        <div className='title'>
          <h2>You'r bookcase</h2>
        </div>
        <div className="form-group row">
          <label 
            htmlFor="Title" 
            className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              htmlFor='Title' 
              className="form-control" 
              id="Title" 
              onChange={event => this.setState({title: event.target.value})}
              />
          </div>
        </div>
        <div className="form-group row">
          <label 
            htmlFor="Author" 
            className="col-sm-2 col-form-label">
            Author
          </label>
          <div className="col-sm-10">
            <input
              htmlFor='Author' 
              className="form-control" 
              id="Author"
              onChange={event => this.setState({author: event.target.value})}
              />
          </div>
        </div>
        <div className="form-group row">
          <label 
            htmlFor="Page" 
            className="col-sm-2 col-form-label">
            Page
          </label>
          <div className="col-sm-10">
            <input
              htmlFor='Page' 
              className="form-control" 
              id="Page" 
              onChange={event => this.setState({page: event.target.value})}
              />
          </div>
        </div>
        <div className='btn-toolbar' role='toolbar'>
          <button 
            className="submit-btn btn btn-success mr-2" 
            type="button"
            onClick={() => this.addBook()}>
            Add a book
          </button>
          <button 
            className="submit-btn btn btn-success" 
            type="button"
            onClick={() => this.clearBooks()}>
            Clear all books
          </button>
        </div>
        <BookList 
          books={this.props.books}
          deleteBook={this.props.deleteBook}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    books: state
  }
} 

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, { addBook, deleteBook, clearBooks })(App);