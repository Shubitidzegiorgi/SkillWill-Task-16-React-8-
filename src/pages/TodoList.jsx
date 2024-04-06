import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTodoAction, toggleTodoAction } from "../store/todo/todo.actions";

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteTodoAction(index));
    };

    const handleToggle = (index) => {
        dispatch(toggleTodoAction(index));
    };

    return (
        <div>
            <h2>Todo List</h2>
            {todoList.map((item, index) => (
                <div key={index}>
                    <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleToggle(index)}>Done</button>
                </div>
            ))}
            <Link to="/create">To Create Page</Link>
            <Link to = {'/done'}>Done Todos</Link>
        </div>
    );
};

export default TodoListPage