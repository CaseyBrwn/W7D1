import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const body = this.props.todo.body;

        return (
            <>
                <li >{body}</li>
            </>
        )
    }
}

export default TodoListItem;