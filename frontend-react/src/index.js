import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainApp from './MainApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <MainApp />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
