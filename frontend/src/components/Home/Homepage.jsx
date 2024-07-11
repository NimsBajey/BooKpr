import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import ViewBooks from '../singleBook/ViewBooks'
import axios from 'axios'

const Homepage = () => {
  const [books,setBooks] = useState([])
  const fetchBook = async()=>{
   const res = await axios.get('http://localhost:3000/book')
   if(res.status === 200){
    setBooks(res.data.data)
   }
   
  }

  
  useEffect(()=>{
    fetchBook()
  },[]) 

  return (
    <div >
      <NavBar/>
      <div className='flex flex-wrap-reverse justify-evenly mt-20'>
       {
        books.length  > 0 && books.map((book)=> {
        return (

          <ViewBooks book={book}/>

        )
        })
       }
       </div>
    </div>
  )
}

export default Homepage
