import TodoList from '../models/todosList.js'
import moment from 'moment'
export const todoController = async (req, res) =>{
    try {
        const todo= await TodoList.find()
        res.render('index', {todo:todo,  moment:moment})
    } catch (error) {
        console.log(error)
    }
} 

export const todoPostController = (req, res)=>{
    try {
        const { taskname } = req.body
        const status = 'incomplete'
        if(!taskname){
            req.flash('error','Task field are required..')
            return res.redirect('/')
        }
        console.log(taskname)

        const todoList = new TodoList({
            title:taskname,
            status:status
        })
        const data=todoList.save()
        if(data){
            req.flash('success','Task Added Successsfully')
            return res.redirect('/')
        }else{
            req.flash('error','All fields are required..')
            return res.redirect('/')
        }
    } catch (error) {
        res.status(500)
        .json(error)
    }
}



export  const checkedTask = async (req, res)=>{
    try {
        const _id = req.params.id;
        console.log(_id)
        const checkedTod= await TodoList.findByIdAndUpdate(_id,{status:'complete'})
        if(checkedTod){
            req.flash('success','Task Completed Successsfully')
            return res.redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
}

export const ViewTask = async(req,res)=>{
    try {
        const _id = req.params.id;
        const data=await Meeting.findOne({_id:id,moment:moment},(err,response)=>{
            res.json(response);
        })
        console.log(data)
    } catch (error) {
        
    }
}

export  const UpdateTask = async (req, res)=>{
    try {
        const _id = req.params.id;
        console.log(_id)
        const checkedTod= await TodoList.findByIdAndUpdate(_id,req.body)
        if(checkedTod){
            req.flash('success','Task Completed Successsfully')
            return res.redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
}



export  const deleteTask = async (req, res)=>{
    try {
        const _id = req.params.id;
        console.log(_id)
        const checkedTodo= await TodoList.remove({_id: req.params.id})
        if(checkedTodo){
            req.flash('success','One Task Deleted Successsfully')
            return res.redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
}