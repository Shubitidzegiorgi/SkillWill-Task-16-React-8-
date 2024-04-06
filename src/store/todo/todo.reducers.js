const initialState = {
    todoList: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TODO':
          return {
              todoList: [...state.todoList, { text: action.payload, done: false }]
          };
      case 'DELETE_TODO':
          return {
              todoList: state.todoList.filter((_, index) => index !== action.payload)
          };
      case 'TOGGLE_TODO':
          return {
              todoList: state.todoList.map((todo, index) =>
                  index === action.payload ? { ...todo, done: !todo.done } : todo
              )
          };
      default:
          return state;
  }
};