import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducers = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});


const store = createStore(rootReducers);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
