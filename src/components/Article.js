import React, { Component } from 'react'
import style from './Article.css'
import CommentList from './CommentList'

export default class Article extends Component {

    constructor(props){
       super(props)

        this.state = {
           isOpen: true
        }

        this.toggleClick = this.toggleClick.bind(this)
    }

    render(){
        const { title, text } = this.props.article
        const { isOpen } = this.state
        const toggle = isOpen ? 'hidden' : ''

        return (
            <div >
                <h3>{title}</h3>
                <button onClick={this.toggleClick}>
                    {isOpen ? 'open': 'close' }
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { isOpen } = this.state
        const { text } = this.props.article
        if(isOpen) return null
        return  <div>
            <section>{text}</section>
            <CommentList {...this.props.article}/>
        </div>
    }

    toggleClick () {
        console.log('click')
        const { isOpen } = this.state
        this.setState({
            isOpen: !isOpen
        })
    }
}



