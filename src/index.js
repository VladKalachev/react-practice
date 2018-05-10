import React from 'react';
import {render} from 'react-dom';
import Article from './Article';
import ArticleList from './ArticleList';
import registerServiceWorker from './registerServiceWorker';
import {articles} from './fixtures'

//console.log('normalizedArticles', normalizedArticles);


render(<ArticleList articles={articles} foo="bar"/>, document.getElementById('root'));
registerServiceWorker();
