import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.setTitle = this.setTitle.bind(this);
        this.setBody = this.setBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setTitle(e) {
        const title = e.target.value;
        this.setState({ title });
    }

    setBody(e) {
        const body = e.target.value;
        this.setState({ body });
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
            body: this.state.body,
            done: false
        };
        // debugger
        this.props.receiveTodo(todo);
        this.setState({ title: '' });
        this.setState({ body: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="todo-form">
                <label>Title
                    <input onChange={this.setTitle} type="text" className="title" value={this.state.title}/>
                </label>
                <label>Body 
                    <input onChange={this.setBody} type="text" className="body" value={this.state.body} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default InputForm;