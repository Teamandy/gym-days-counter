import React from 'react'
import { render } from 'react-dom'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './components/App'

const app = document.getElementById('app')

render(
    <App />,
    app)