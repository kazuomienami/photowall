import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/stylesheet.css'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer';
import App from './components/app';
import Thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const enhancers = [applyMiddleware(Thunk)]

const store = createStore(rootReducer, composeWithDevTools(...enhancers))
ReactDOM.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));