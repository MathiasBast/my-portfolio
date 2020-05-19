import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path='/' component={Home} />
    </>
  )
}

export default App
