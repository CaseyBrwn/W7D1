export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
// export const UPDATE_TODO = "UPDATE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    };

};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    };

};





// export const receiveTodo = (title, body) => {
//     return {
//         type: RECEIVE_TODO,
//         title,
//         body,
//         key: Math.floor(Math.random() * 10000)
//     };
// };



// export const updateTodo = (title, description) => {
//     return {
//         type: UPDATE_TODO,
//         title,
//         description,
//         key: Math.floor(Math.random() * 10000)
//     };
// };

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    };
};