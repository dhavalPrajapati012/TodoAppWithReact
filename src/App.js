import React, { Component } from 'react'
import Todo from './Todo'

class App extends Component {
  constructor() {

    super()
    this.state = {
      inputValue: '',
      toDoApp: [
        {
          id: Math.random(),
          wish: 'Your Dreams(Aims) will Display here',
          isDone: false
        }
      ],
      error: []
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  add = () => {
    let error = [];
    let textwish = this.state.inputValue;
    if (!textwish) {
      error.push("invalidWish")
    } else {
      error = [];
      this.setState({
        toDoApp: [...this.state.toDoApp, {
          id: Math.random(),
          wish: textwish
        }]
      })
    }
    if (error.length) {
      this.setState({ error })
    } else {
      this.setState({ error: [] })
    }
  }
  delete = (id) => {
    let arr = []
    for (let i = 0; i < this.state.toDoApp.length; i++) {
      const element = this.state.toDoApp[i];
      if (element.id === id) {
        element.isDone = true
      }
      arr.push(element)
    }
    console.log(arr);
    this.setState({
      toDoApp: arr
    })
  }
  restore = (id) => {
    let arr = []
    for (let i = 0; i < this.state.toDoApp.length; i++) {
      const element = this.state.toDoApp[i];
      if (element.id === id) {
        if (element.isDone = true) {
          element.isDone = false
        }
      }
      arr.push(element)
    }
    this.setState({
      toDoApp: arr
    })
  }

  render() {
    return (
      <>
        <div className="contain">
          <div className="mid">
            <div className="main">
              <div className="inputwish">
                <input type="text" className="wish" name="inputValue" placeholder="Enter Your Wish Here" value={this.state.toDoApp.wish} onChange={(event) => this.handleChange(event)} />
                {this.state.error.includes("invalidWish") && (<p className="error">WishText Shouldn't be Empty.</p>)}
                <button type="button" class="btn btn-primary add" onClick={() => this.add()}>+Add</button>
              </div>
              <div className="list">
                <h4 className="text-center">Your Wishes</h4>
                {this.state.toDoApp.map((val) => (
                  <Todo wish={val.wish} id={val.id} isDone={val.isDone} onClick={(id) => this.delete(id)} click={(id) => this.restore(id)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
