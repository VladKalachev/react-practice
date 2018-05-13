import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }

        this.toggleClick = this.toggleClick.bind(this)
    }

    render(){
        const { comments } =this.props
        const { isOpen } = this.state

        return (
            <div>
                {comments ? <button onClick={this.toggleClick}>{isOpen ? 'close comment' : 'open comment'}</button> : null }
                <ul>{this.getComment()}</ul>
            </div>
        )
    }

    getComment(){
        const { comments } =this.props
        const { isOpen } = this.state
        console.log(comments)
        if(comments && isOpen){
            return (
                comments.map(com => <li key={com.id}><Comment {...com}/></li>)
            )
        } else {
            return null
        }
    }

    toggleClick(){

        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentList