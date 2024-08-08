import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import {UseStateDemo} from './components/UseStateDemo'
import UseEffectDemo from './components/useEffectDemo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateDemo /> */}
    <UseEffectDemo />
  </React.StrictMode>,
)
