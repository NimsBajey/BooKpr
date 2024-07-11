import {React, useEffect, useState} from 'react'
import NavBar from '../NavBar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const EditBook = () => {  
  const navigate = useNavigate()
  const {id} = useParams()
  const [oldData, setOldData] = useState({
    bookName: '',
    bookDes: '',
    bookPrice: '',
    authorName: '',
    isBnNumber: null
  })
  const [data, setData] = useState({
    bookName : '',
    bookDes : '',
    bookPrice : ' ',
    authorName : ' ', 
    isBnNumber : null,
  })
  const [bookImg, setBookImg] = useState(null);

    const firstLoad = async()=>{
      const url =  `http://localhost:3000/books/${id}`;
      console.log("Worling")

      const res = await axios.get(url)  
        if(res.status === 200)
        setOldData(res.data.data)
      else 
      console.log("some error occured");  
    }


    const handleChange = (e)=>{
      const {name , value} = e.target
      setData({
        ...oldData, 
        [name] : value
      })
      console.log("Working")
  }

    
    const handleSubmit = async(e)=> {
      e.preventDefault()
      const formData = new FormData()

      Object.entries(data).forEach(([key,value])=>{
        formData.append(key,value)
      })
      formData.append('bookImg', bookImg)

       const res = await axios.patch(`http://localhost:3000/bookupdate/${id}` , formData )

    if(res.status === 200){
      navigate("/")
    }else{
      alert("Book Not Added");
    }
    }

    useEffect(()=>{
      firstLoad()
    },[])

  return (
    <div>
      <NavBar/>
      <div className="flex mt-[80px]">
<section class="max-w-4xl w-[90%] md:w-[50%] p-6 mx-auto bg-indigo-600 rounded-md shadow-md">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Edit Book</h1>
    <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4 ">
            <div>
                <label class="text-white dark:text-gray-200" htmlFor="bookName">Book Name</label>
                <input onChange={handleChange} id="bookName" value={oldData.bookName} name='bookName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" htmlFor="bookDes">Book Description</label>
                <textarea onChange={handleChange} id="bookDes" placeholder={oldData.bookDes} name='bookDes'  type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" htmlFor="bookPrice">Book Price (Rs.)</label>
                <input onChange={handleChange} id="bookPrice" placeholder={oldData.bookPrice}  name='bookPrice' type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" htmlFor="authorName">Author Name</label>
                <input onChange={handleChange} id="authorName" placeholder={oldData.authorName} name='authorName' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" htmlFor="isBnNumber"> Isbn Number</label>
                <input onChange={handleChange} id="isBnNumber" name='isBnNumber' placeholder={oldData.isBnNumber} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="block text-sm font-medium text-white">
                Book Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label htmlFor="bookImg" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input onChange={(e)=> setBookImg(e.target.files[0])} id="bookImg" name="bookImg" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 2MB
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button type='submit' class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>

      </div>
    </div>
  )
}

export default EditBook
