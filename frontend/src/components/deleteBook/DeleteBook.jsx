import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteBook = () => {
    const [book, setBook] = useState([])
    const {id} = useParams();
    const navigate = useNavigate()

  
    const firstLoad = async()=> {
        const res = await axios.get(`http://localhost:3000/books/${id}`)
        if(res.status == 200){
            setBook(res.data.data)
        }else
         alert("Error Occured, Book not found");
    }

    const delBook = async()=>{
      const res = await axios.get(`http://localhost:3000/books/${id}`)
    if(res.status === 200){
      navigate("/")
      alert(`${book.bookName} deleted`)
    }else{
      navigate("/")

    }
        const url = `http://localhost:3000/bookdelete/${id}`
         await axios.delete(url)
      
    }

    useEffect(()=>{
        firstLoad()
        
    }, [])

  return (
    <div className='w-full flex justify-center items-center h-screen '>
      <NavBar/>

      <div className='flex flex-col justify-center'>
      <div className='font-semibold '>Are you sure you want to delete '{book.bookName}'?</div>
      <div className='flex justify-evenly mt-4'>
        <button className="text-white bg-red-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          onClick={()=> delBook()}>Yes</button>
        <button className="text-white bg-red-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
        onClick={()=>{ alert("Not deleted")}}>No</button>
      </div>
      </div>
    </div>
  )
}

export default DeleteBook
