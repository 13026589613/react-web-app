import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './util/reportWebVitals'

import App from './view/App'
import './assets/design/index.less'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
