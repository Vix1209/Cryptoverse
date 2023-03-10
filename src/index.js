import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
//eslint-disable-next-line
import { Provider } from 'react-redux';
// the provider

//eslint-disable-next-line
import store from './app/store';
// store is the variable we are to provide to our provider 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Provider store= {store}>
            <App /> 
        </Provider>
        {/* by wrapping our entire project in the provider, we are giving permission for every component in our app to have access to the store variable */}
    </Router>
  </React.StrictMode>
);

// ReactDOM.render(
//     <Router>
//         <Provider store= {store}>
//             <App /> 
//         </Provider>
//         {/* by wrapping our entire project in the provider, we are giving permission for every component in our app to have access to the store variable */}
//     </Router>
//     , document.getElementById('root'))

