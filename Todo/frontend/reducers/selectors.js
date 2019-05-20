


export const allTodos = (state) => {
    const todosKeys = Object.keys(state);
    return todosKeys.map(key => state[key]);
};



