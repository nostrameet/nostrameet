import React from 'react'
import ReactDOM from 'react-dom/client'
import './custom.scss'
import App from './App/App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import { NDKProvider } from '@nostr-dev-kit/ndk-react'
import relays from 'constants/relays'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <NDKProvider relayUrls={relays}>
      <App />
    </NDKProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
