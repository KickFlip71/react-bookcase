import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addBook, deleteBook } from '../actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  addBook() {
    this.props.addBook(this.state.text)
  }

  deleteBook(id) {
    this.props.deleteBook(id)
  }
  
  renderBooks() {
    const { books } = this.props;
    return (
      <ul className='list-group col-sm-6'>
        {
          books.map(book => {
            return (
              <li key={book.id} className='list-group-item'>
                <div className='list-item'>{book.text}</div>
                <div 
                  className='list-item delete-button'
                  onClick={() => this.deleteBook(book.id)}>&#x2715;</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className='App container'>
        <div className='title'>
          <h2>You'r bookcase</h2>
        </div>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Book name"
            onChange={event => this.setState({text: event.target.value})}
          />
          <div className="input-group-append">
            <button 
              className="btn btn-success" 
              type="button"
              onClick={() => this.addBook()}>
              Add a book
            </button>
          </div>
        </div>
        { this.renderBooks() }
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

export default connect(mapStateToProps, { addBook, deleteBook })(App);