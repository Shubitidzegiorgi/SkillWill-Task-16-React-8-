import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DoneTodoList = () => {
    const { todoList } = useSelector((state) => state.todo);
    const doneTodos = todoList.filter(todo => todo.done);

    return (
        <div>
            <h2>Done Todos</h2>
            {doneTodos.map((item, index) => (
                <div key={index}>
                    <span >{item.text}</span>
                </div>
            ))}

        <Link to = {'/'}> To List</Link>
        <Link to="/create">To Create Page</Link>
        </div>
    );
};

export default DoneTodoList;
