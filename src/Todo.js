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
                        <div className="perm" onClick={() => this.props.clickMe(id)}><i class="fas fa-trash delete" title="DeleteForever"></i></div>
                        <div className="res" onClick={() => this.props.click(id)}><i class="fas fa-trash-restore restore" title="Restore"></i></div>
                        <div className="del" onClick={() => this.props.onClick(id)}><i class="fas fa-trash-alt delete" title="Delete"></i></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Todo
