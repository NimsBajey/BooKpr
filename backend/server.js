
const express = require("express");
const connectDb = require("./database");
const Book = require("./model/bookModel");

const { multer, storage } = require("./middleware/multerConfig");
const app = express()


//cors package
const cors = require('cors'); 
app.use(cors({
  origin : ['http://localhost:5173', 'http://localhost:3000']

}))

//for multer
const fs = require("fs")  //for deleting any thing we use this package
let fileName ; 
connectDb();

const upload = multer({storage: storage})


app.use(express.json()) // to support json in express



app.post("/bookcreate", upload.single("bookImg"),async(req,res)=> {  // creates a new video 
  const {bookName, bookDes, bookPrice, isBnNumber, authorName} = req.body;
  console.log(req.file);  // this gives the info about the upladed file


if(!req.file){
  fileName = "https://th.bing.com/th?id=ODL.6ea4bb3ddb4a35d0789cfcda9ae77da3&w=146&h=146&c=7&rs=1&qlt=80&o=6&dpr=1.3&pid=RichNav"
}else{
  fileName = "http://localhost:3000/" + req.file.filename
}

  await Book.create({  
    bookName, bookDes, bookPrice, isBnNumber,authorName , bookImg : fileName
  })
  res.status(200).json({
    message: "Book Added"
  })
})

app.get("/book", async(req,res)=>{
  const books = await Book.find()   
  res.status(200).json({
    message : "Found",
    data : books
  })
})


app.get("/books/:id", async(req,res)=>{ 
  const id = req.params.id
  const book = await Book.findById(id)
  console.log(id)
  
 
  res.status(200).json({
    message : "found something",
    data : book
  })
})

//for deleting created book
app.delete("/bookdelete/:id", async(req,res)=> {
  const id = req.params.id;
 await Book.findByIdAndDelete(id);

 res.status(200).json({
  message: "SUCCESSFULLY DELETED"
 })
})


//updates the book
app.patch("/bookupdate/:id", upload.single("bookImg"),async(req,res)=> {  //updating video
   const id = req.params.id;
   const {bookName, bookDes, bookPrice, isBnNumber, authorName} = req.body;
   const oldData = await Book.findById(id); 

   if(req.file){
   fileName = "http://localhost:3000/" + req.file.filename
   console.log(`New image : ${fileName}`)

    // console.log(req.file)  //displays the information of entered information
    console.log(` Old file : ${oldData}`)   // displays the information of old data in object format

    const oldImagePath = oldData.bookImg
    const localhostUrlLength = "http://localhost:3000/".length;
    const newOldImagePath = oldImagePath.slice(localhostUrlLength)
    console.log(newOldImagePath);
    console.log(`This path gets deleted: storage/${newOldImagePath}`);
    fs.unlink(`storage/${newOldImagePath}`, (err)=> {  // helps to delete any file
      if(err)
          console.log(err)
      else  
         console.log("FILE DELETED");  
    })
   }

   await Book.findByIdAndUpdate(id, {
    bookName, bookDes, bookPrice, isBnNumber, authorName,
    bookImg : fileName
   });

   res.status(200).json({
    message : "Book has been Updated"
   })
})



app.use(express.static("./storage/"))

app.listen(3000, ()=> {
    console.log("Properly Working!!");
})
