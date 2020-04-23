const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <ul key={todo._id}>
                    <li onClick={() => { deleteTodo(todo._id, todo.completed) }}>
                        {todo.completed === true ? <Icon /> : <div></div>}
                        <div style={{ textDecoration: todo.completed === true ? "line-through solid #3d3d3d" : "none" }}>{todo.content}</div>
                    </li>
                </ul>
            )
        })
    ) : (
            <p style={{ textAlign: 'center' }}>You have nothing left todo... yayy!</p>
        )
    return (
        <div>
            {todoList}
        </div>
    )
}
function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="18"
            height="18"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <ellipse cx="256" cy="256" fill="#32BEA6" rx="256" ry="255.832"></ellipse>
            <path
                fill="#FFF"
                d="M235.472 392.08L114.432 297.784 148.848 253.616 223.176 311.52 345.848 134.504 391.88 166.392z"
            ></path>
        </svg>
    );
}


export default Todos;