import React, { Component } from 'react'

export default (OriginalComponent) => class WrapperComponent extends Component {


    constructor(props){
        super(props)

        this.state = {
            isOpen: true
        }

        this.toggleOpen = this.toggleOpen.bind(this)
    }


    render() {
        return <OriginalComponent toggleOpen={this.toggleOpen} {...this.props} {...this.state} />
    }

    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}