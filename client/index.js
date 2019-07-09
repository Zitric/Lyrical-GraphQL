import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory } from 'history'

import Routes from './routes/Routes'

const client = new ApolloClient({})

const history = createBrowserHistory()

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Routes key={Math.random()} />
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
