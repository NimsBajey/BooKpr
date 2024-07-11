import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Book from './components/singleBook/Book';
import AddBook from './components/addBook/AddBook'
import DeleteBook from './components/deleteBook/DeleteBook';
import EditBook from './components/editBook/EditBook';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/book/:id' element={<Book/>}/>
        <Route path='/bookcreate' element={<AddBook/>} />
        <Route path='/bookdelete/:id' element={<DeleteBook/>} />
        <Route path='/bookupdate/:id' element={<EditBook />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
