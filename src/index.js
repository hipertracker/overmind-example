import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Posts />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
