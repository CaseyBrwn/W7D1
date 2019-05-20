import React from 'react';
import App from './app';
import configStore from '../store/store';
import { Provider } from 'react-redux';

const store = configStore;

const Root = ({store}) => (

    <Provider store={ store }>
        <App />
    </Provider>

)

export default Root;