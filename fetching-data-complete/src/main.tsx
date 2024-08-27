import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {UseStateDemo} from './components/UseStateDemo'
import UseEffectDemo from './components/useEffectDemo.tsx'
import UseMemoDemo from './components/useMemoDemo.tsx'
import TermComponentTest from './components/TermComponentTest.tsx'
import ParentComponent from './components/TestParentComponent.tsx'
import PokemonComponent from './pages/Pokemon.tsx'
import UseReducerComponent from './components/useReducer.tsx'
import UseReducerDemo from './components/useReducerDemo.tsx'
import ThreeComponent from './components/ThreeComponent.tsx'
import FolderComponent from './components/FolderComponent.tsx'
import App from './components/NewTermComponent.tsx'
import Page from './components/TermTest.tsx'


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
    {/* <UseReducerDemo/> */}
    <Page/>

  </React.StrictMode>,
)
