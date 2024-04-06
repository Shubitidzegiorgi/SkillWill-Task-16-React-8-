import CreateTodoPage from "../pages/CreateTodo";
import DoneTodoList from "../pages/DoneTodoList";
import TodoListPage from "../pages/TodoList";

const routes = [
    {
        element: <CreateTodoPage/>,
        path: '/create'
    },
    {
        element: <TodoListPage/>,
        path: '/'
    },
    {
        element: <DoneTodoList />, 
        path: '/done' 
    }
]

export default routes