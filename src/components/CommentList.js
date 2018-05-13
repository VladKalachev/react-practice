import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class CommentList extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    constructor(props){
        super(props)
    }

    render(){
        const { comments } =this.props
        const { isOpen, toggleOpen } = this.props

        return (
            <div ref={this.refDiv}>
                {comments ? <button onClick={toggleOpen}>{!isOpen ? 'close comment' : 'open comment'}</button> : null }
                <ul>{this.getComment()}</ul>
            </div>
        )
    }

    refDiv = ref => {
       // console.log(ref)
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