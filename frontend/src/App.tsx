import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import useBooks from "./useBooks";
import AddBook from "./AddBook";
import BookGallery from "./BookGallery";
import './BookGallery.css';

function App() {
    const {books, addBook, deleteBook } = useBooks()
  return (
    <div className="App">
      <Header/>
        <AddBook addBook={addBook}/>
        <BookGallery books={books} deleteBook={deleteBook}/>

    </div>
  );
}

export default App;
