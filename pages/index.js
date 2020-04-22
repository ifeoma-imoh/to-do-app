import { Component } from 'react'
import axios from 'axios'
import Todos from './Todos'
import AddTodo from './addForm'



class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/api/todos')
            .then(res => {
                console.log(res)
            })

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

}
export default App;