import React, { Component } from 'react'

class UserForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        username: ''
    };

    render() {
        return (
            <div>
                Name: <input type='text' value={this.state.username} onChange={this.changeName}/>
            </div>
        );
    }

    changeName =(ev) =>{
        this.setState({ username: ev.target.value})
    }
}

export default UserForm;
