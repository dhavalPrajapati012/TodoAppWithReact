import React, { Component } from 'react'
import "./App.css"

class Todo extends Component {
    render() {
        const { id, wish, isDone } = this.props
        return (
            <>
                <div className="wishlist">
                    <div><p className="text" style={{ textDecoration: isDone && 'line-through' }} >{wish}</p></div>
                    <div className="re">
                        <div className="res" onClick={() => this.props.click(id)}><i class="fas fa-trash-restore restore"></i></div>
                        <div className="del" onClick={() => this.props.onClick(id)}><i class="fas fa-trash-alt delete"></i></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Todo
