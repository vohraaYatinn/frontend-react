/* eslint-disable */

import 'react-app-polyfill/stable'
import 'core-js'
import React, { useEffect } from 'react'


import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from '../src/redux/Store'
// import loginCheck from './ loginCheck'


createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    {/* <loginCheck/> */}
    <App />
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
