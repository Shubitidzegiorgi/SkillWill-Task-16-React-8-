import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.actions"
import { Link } from "react-router-dom"

const CreateTodoPage = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodoAction(value))
        setValue('')
    }

    return <form onSubmit={onSubmit}>
        <h2>Create Todos</h2>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button>Submit</button>

        <Link to = {'/'}> To List</Link>
        <Link to = {'/done'}>Done Todos</Link>
    </form>
}

export default CreateTodoPage