import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';


// export const toDo = () => <h3>Todo List goes here!</h3>

 const Todo = (props) => {
    const titleList = props.todos.map((todo, idx) => {
       return (
            <ul key={idx}>
                <li >{todo.title}</li>
                <ul>
                    <TodoListItem todo={todo}/>
                </ul>
            </ul>
       )
    });

     const form =
        <section>
            <TodoForm receiveTodo={props.receiveTodo} />
        </section>

    return (
        <>
            <ul>
                {titleList}
                {form}
            </ul>
        </>
    )
}

export default Todo;