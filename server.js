import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import flash from 'express-flash'
import session from 'express-session'
import InitRoutes from './routes/web.js'

dotenv.config()
const app=express()
const port =process.env.PORT || 3000
const __dirname = path.resolve();




//Database Connection
mongoose.connect(process.env.MONGO_CONNECTION_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
  })
const connection = mongoose.connection;
  connection.once('open', ()=>{
    console.log('Database connected')
  }).catch(err =>{
    console.log("connection field"+err)
})


//Assets
app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave:false,
  saveUninitialized:false,
  cookie : {maxAge:1000 * 60 * 60 * 24}//24 hours
}))
app.use(flash())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views',path.join(__dirname , '/resources/views'))
app.set('view engine' , 'ejs')

InitRoutes(app)

app.listen(port, ()=>{
    console.log(`server runing on localhost//${port}`)
})