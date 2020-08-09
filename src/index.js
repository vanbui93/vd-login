import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import setAuthorizationToken from './utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//kiểm tra nếu tồn tại user trong localStorage 
if(localStorage.jwtToken) {

  // Tiến hành thêm Authorization vào header của network
  setAuthorizationToken(localStorage.jwtToken);
  
    //nếu tồn tại user trong localStorage thì tiến hành dispatch luôn mà không cần chờ phải có ACTION
  // store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken))); //=> dùng giải mã nếu có backend đã mã hóa trước đó
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
