import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const store= createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>
 ,
  document.getElementById('root')
);

