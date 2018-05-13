import React, { Component } from 'react';
import ArticleList from './ArticleList'

class App extends Component {
    render(){
        return <ArticleList {...this.props}/>
    }
}


export default App
