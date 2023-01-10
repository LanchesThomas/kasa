import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index'
import About from './pages/About/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import resolution from './utils/resolution'
import Error from './pages/Error'

const Globalstyle = createGlobalStyle`
body {
  font-family: 'Montserrat';
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  margin: 20px auto;

}
* { 
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Globalstyle />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
