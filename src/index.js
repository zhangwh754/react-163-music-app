import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import 'antd/dist/reset.css'

import App from './App'
import store from './store'
import './assets/css/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
