import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './root';
import * as serviceWorker from './serviceWorker';

export default MainApp;
ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);

serviceWorker.register();

