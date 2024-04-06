export const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload
})

export const deleteTodoAction = (index) => ({
    type: 'DELETE_TODO',
    payload: index
});

export const toggleTodoAction = (index) => ({
    type: 'TOGGLE_TODO',
    payload: index
});