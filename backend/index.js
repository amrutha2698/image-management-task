require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./db/connection')
const router=require('./Routes/router')

const server=express()
server.use(cors())
server.use(express.json())
server.use(router)


const PORT=4000 || process.env.PORT

// We have to export uploads folder as a static file/folder
server.use('/uploads',express.static('./uploads'))



server.listen(PORT,()=>{
    console.log(`Your Server started running at  : ${PORT}`);
})
server.get('/',(req,res)=>{
    res.send(`<h1>Image management server started</h1>`)
})