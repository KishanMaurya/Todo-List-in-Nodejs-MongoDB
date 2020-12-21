import mongoose from 'mongoose'
const TodoSchema = mongoose.Schema

const TodoList = new TodoSchema({
    title:{type:String, required:true},
    status:{
        type:String,
    }
    
},{ timestamps: true })

const modelList=mongoose.model('TodoList',TodoList)

export default modelList