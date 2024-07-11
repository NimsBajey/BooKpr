import {React, useState, useEffect} from 'react'
import NavBar from '../NavBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Book = () => {
    const {id} = useParams();
    const fetchBook = async()=>{
      const url = `http://localhost:3000/books/${id}`;
  
        const res = await axios.get(url)
        if(res.status === 200)
        setBook(res.data.data)
      else 
      console.log("some error occured");  
    }
    const [book, setBook] = useState([])
    useEffect(()=>{
         fetchBook()
    }, [])  
  return (
 <div className='w-full flex justify-center items-center h-screen '>
      <NavBar/>
   <div className='w-[80%] flex flex-col md:h-[80%] md:mt-14 mt-[200px] md:flex-row h-[100%]'> 
   <div className=' md:w-1/2 h-[350px] md:h-full'>
    <div className='flex flex-col justify-center items-center h-full '>
        <span className='w-full h-[450px]  flex justify-center drop-shadow-2xl '>
          <img className="h-[250px] md:h-[450px]  max-w-lg transition-all duration-300 rounded-lg cursor-pointer filterhover:blur-none" src={book.bookImg}></img>
        </span>
        <span className='flex w-1/2 justify-evenly text-sm m-2 '>
        <Link to={`/bookupdate/${book._id}`} >
        <button type="button" className="mt-4 w-[60px] rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Edit</button>
        </Link>       
        <Link to={`/bookdelete/${book._id}`} >
        <button type="button" className="mt-4 w-[60px] rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Delete</button>
        </Link>
        </span>
    </div>                                                                                      
   </div>
   <div className=' md:w-1/2 h-[300px] md:h-full flex flex-col justify-center md:gap-4 md:-mt-4 mt-[15px] '>
          <span className='md:text-2xl mt-9 text-xl font-bold  md:mb-2 mr-2  inline-block   bg-gray-100 px-3 py-1 text-[30px] text-gray-900'>
             Title : {book.bookName}
          </span>
          <div className= 'md:mb-2 mr-2  inline-block bg-gray-100 px-3   text-[12px] md:text-[15px] font-semibold text-gray-900 '>
              Description:
          <br/>
             {book.bookDes}
          </div>
          <span className= "md:mb-2 mr-2  inline-block  bg-gray-100 px-3  text-[12px] md:text-[15px] font-semibold text-gray-900">
             Author : {book.authorName}
          </span>
          <span className= "md:mb-2 mr-2 inline-block  bg-gray-100 px-3  text-[12px] md:text-[15px] font-semibold text-gray-900">
             IsBnNumber : {book.isBnNumber}
          </span>
          <span className= "md:mb-2 mr-2 inline-block  bg-gray-100 px-3  text-[12px] md:text-[15px] font-semibold text-gray-900">
             Price : Rs.{book.bookPrice}
          </span>
   
   </div>
  </div>
</div>
  )}
export default Book
