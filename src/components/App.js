import React, { Component } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import {articles} from "../fixtures";

class App extends Component {


    state = {
        selections: null
    }

    render(){

        const options = this.props.articles.map(item => ({
            value: item.id, label: item.title,
        }))

        console.log(options)

        console.log(this.state)
        return <div>
            <UserForm />
            <Select options={options} value={this.state.selections} onChange={this.chengeSelection} multi={true}/>

            <ArticleList {...this.props}/>
        </div>
    }

    chengeSelection = selections => this.setState({ selections })

}


export default App
