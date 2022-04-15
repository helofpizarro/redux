import React from 'react'
import Router from './routes'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import './config/reactotron.config'

import store from './store'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Router />
      <GlobalStyle />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
