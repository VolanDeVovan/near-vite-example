import React from 'react'
import ReactDOM from 'react-dom/client'
import { Buffer } from 'buffer'
import App from './App'
import near from './near'

// https://github.com/near/near-api-js/issues/757
globalThis.Buffer = Buffer


near.initContract()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
