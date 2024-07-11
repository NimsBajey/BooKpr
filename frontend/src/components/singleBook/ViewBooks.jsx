import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const SingleBook = ({book}) => {
    console.log(book)
  return (

<div className="w-[300px] rounded-md border mt-5 " key={book._id}>
      <img
        src= {book.bookImg ? book.bookImg : "https://www.uk-muscle.co.uk/uploads/monthly_04_2015/post-114463-143615078994_thumb.jpg"}
        alt="Book image"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {book.bookName} &nbsp; <Link to={`/book/${book._id}`}><ArrowUpRight className="h-4 w-4" /></Link>
        </h1>
        <p className="mt-3 text-[15px] text-gray-600 min-h-[50px] max-h-[50px] overflow-hidden">
          {book.bookDes}
        </p>
        <div className="mt-4 flex flex-col ">
          <span className="mb-2 mr-2  inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          Author : {book.authorName}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          IsBnNumber : {book.isBnNumber}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          Price : Rs.{book.bookPrice}
          </span>
        </div>

        <div className='flex flex-row w-full justify-evenly text-sm'>
        <Link to={`/bookupdate/${book._id}`}>
        <button
          type="button"
          className="mt-4 w-[100px] rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

        >
          Edit
        </button>
        </Link>
        <Link to={`/bookdelete/${book._id}`} >
        <button 
          type="button"
          className="mt-4 w-[100px] rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Delete
        </button>
        </Link>
        </div>
      </div>
    </div>

  )
}

export default SingleBook
