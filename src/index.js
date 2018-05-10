import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import registerServiceWorker from './registerServiceWorker';
import {articles} from './fixtures'

//console.log('normalizedArticles', normalizedArticles);



ReactDOM.render(<Article article={articles[0]} foo="bar"/>, document.getElementById('root'));
registerServiceWorker();
