import React from 'react'
import Article from './Article'

function ArticleList({articles}) {
    return (
        <ul>
            {articles.map(item => {
                return  <li key={item.id}><Article article={item}/></li>
            })}
        </ul>
    )
}

export default ArticleList