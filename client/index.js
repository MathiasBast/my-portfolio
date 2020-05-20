import React from 'react'
import ReactDOM from 'react-dom'
// import { Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
// import { wrapHistory } from 'oaf-react-router'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
