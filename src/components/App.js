import React, { Component } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'


class App extends Component {


    state = {
        username: ''
    }

    render(){
        return <div>
            <UserForm />
            <ArticleList {...this.props}/>
        </div>
    }


}


export default App
