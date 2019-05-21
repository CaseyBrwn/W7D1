


export const allTodos = (state) => {
    const todosKeys = Object.keys(state.todos);
    return todosKeys.map(key => state.todos[key]);
};



