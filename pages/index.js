import { Component } from 'react'
import Todos from './Todos'
import AddTodo from './addForm'



class App extends Component {
    state = {
        todos: [
            { id: 1, content: "Learn Next.js", completed: false },
            { id: 2, content: "Build a TO-DO app with Next.js", completed: false },
            { id: 3, content: "Learn github actions", completed: false },
            { id: 4, content: "Drink 56 glases of water this week", completed: false },
            { id: 5, content: "Cook Stew", completed: false },
            { id: 6, content: "Cook Jollof rice", completed: false },
        ]
    }

    deleteTodo = (id) => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo
            }
        });
        console.table(newTodos)
        this.setState({
            todos: newTodos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos
        })
    }
    render() {
        return (
            <div className="App">
                <div className="Appwrapper">
                    <h1>To-do this week!</h1>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                </div>
            </div>
        );
    }
}

export default App;