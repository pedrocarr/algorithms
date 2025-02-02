import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App_useState';
import AppUseEffect from './App_useEffect';
import AppUseContext from './App_useContext';
import AppUseRef from './App_useRef';
import AppUseReducer from './App_useReducer';
import AppUseMemo from './App_useMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppUseEffect/> */}
    {/* <App/> */}
    {/* <AppUseContext/> */}
    {/* <AppUseRef/> */}
    {/* <AppUseReducer/> */}
    <AppUseMemo/>
  </React.StrictMode>
);

