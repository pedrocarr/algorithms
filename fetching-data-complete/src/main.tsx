import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import {UseStateDemo} from './components/UseStateDemo'
import UseEffectDemo from './components/useEffectDemo.tsx'
import UseMemoDemo from './components/useMemoDemo.tsx'
import TermComponentTest from './components/TermComponentTest.tsx'
import ParentComponent from './components/TestParentComponent.tsx'
import PokemonComponent from './pages/Pokemon.tsx'
import UseReducerComponent from './components/useReducer.tsx'
import UseReducerDemo from './components/useReducerDemo.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateDemo /> */}
    {/* <UseEffectDemo /> */}
    {/* <UseMemoDemo /> */}
    {/* <TermComponentTest/> */}
    {/* <ParentComponent/> */}
    {/* <PokemonComponent/> */}
    {/* <UseReducerComponent/> */}
    <UseReducerDemo/>
  </React.StrictMode>,
)
