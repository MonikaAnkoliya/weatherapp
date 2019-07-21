import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';

const MainApp = () => {
    return(
        <Provider store={configureStore()}>
            <App />
        </Provider>
    )
}
export default MainApp;

