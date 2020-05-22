import React from 'react'
import { Route, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import Home from './Home'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'

const App = () => {
  const history = createBrowserHistory()
  wrapHistory(history)
  return (
    <Router history={history}>
      <>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutMe' component={AboutMe} />
        <Route exact path='/contactMe' component={ContactMe} />
        <Route exact path='/projects' component={Projects} />
      </>
    </Router>
  )
}

export default App
