import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {articles} from './fixtures'

render(<App articles={articles} />, document.getElementById('root'));
registerServiceWorker();
