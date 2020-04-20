import { Component } from 'react'


class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content) {
      this.props.addTodo(this.state)
      this.setState({
        content: ''
      })
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Add new todo:</label>
          <input type="text" id="mouseOver" onChange={this.handleChange} value={this.state.content} />
          <button type="submit">Submit</button>
        </form>

      </div >
    )
  }
}


export default AddTodo