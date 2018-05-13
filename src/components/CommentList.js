import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const { comments } =this.props
        const { isOpen, toggleOpen } = this.props

        return (
            <div>
                {comments ? <button onClick={toggleOpen}>{!isOpen ? 'close comment' : 'open comment'}</button> : null }
                <ul>{this.getComment()}</ul>
            </div>
        )
    }

    getComment(){
        const { comments, isOpen } =this.props
        if(comments && !isOpen){
            return (
                comments.map(com => <li key={com.id}><Comment {...com}/></li>)
            )
        } else {
            return null
        }
    }

}

export default toggleOpen(CommentList)