import { todoController,todoPostController ,checkedTask,ViewTask, deleteTask} from '../app/controller/todoController.js'
const InitRoutes=(app)=>{

    app.get('/', todoController)
    app.post('/taskPost',todoPostController)
    app.put('/taskview/:id',ViewTask)
    app.patch('/taskcheck/:id', checkedTask)
    app.delete('/taskcheck/:id', deleteTask)

}

export default InitRoutes