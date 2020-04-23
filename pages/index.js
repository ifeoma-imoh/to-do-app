import { Component } from 'react'
import axios from 'axios'
import Todos from './Todos'
import AddTodo from './addForm'



class App extends Component {
    state = {
        todos: []
    }


    componentDidMount() {
        axios.get('http://localhost:3000/api/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
    }



    deleteTodo = (id, completed) => {
        axios.put(`http://localhost:3000/api/todos/${id}`, { completed: !completed }, {
            headers: { 'content-type': 'application/json' }
        })
            .then((res) => {
                const newTodos = this.state.todos.map(todo => {
                    if (todo._id === id) {
                        return { ...todo, completed: !todo.completed }
                    } else {
                        return todo
                    }
                });
                console.table(newTodos)
                this.setState({
                    todos: newTodos
                })
            })
    }

    addTodo = (todo) => {
        axios.post('http://localhost:3000/api/todos', todo, {
            headers: { 'content-type': 'application/json' }
        })
            .then((res) => {
                console.log(res)
                let todos = [...this.state.todos, res.data];
                this.setState({
                    todos
                })
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