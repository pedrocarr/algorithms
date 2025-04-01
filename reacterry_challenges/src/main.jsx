import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import StyledButton from './challenges/styled-button/styled-button.jsx'
// import LocalStorage from './challenges/local-storage-I/local-storage-I.jsx'
// import SyntaxErrorsClass from './challenges/fix-syntax-errors-class/class-errors'
// import FunctionErrors from './challenges/fix-syntax-errors-fn/functions-errors'
import DisableButton from './challenges/disable-button/disable-button'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StyledButton/> */}
    {/* <LocalStorage/> */}
    {/* <SyntaxErrorsClass/> */}
    {/* <FunctionErrors/> */}
    <DisableButton/>
  </StrictMode>,
)
