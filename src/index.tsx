// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WithStylesContext from 'react-with-styles/lib/WithStylesContext';
// @ts-ignore
import WithStylesDirectionAdapter from 'react-with-styles/lib/providers/WithStylesDirectionAdapter';
// @ts-ignore
import AphroditeInterface from 'react-with-styles-interface-aphrodite';
ReactDOM.render(
  <React.StrictMode>
    <WithStylesContext.Provider
      value={{
        stylesInterface: AphroditeInterface,
        stylesTheme: {},
      }}
    >
      <WithStylesDirectionAdapter>
        <App />
      </WithStylesDirectionAdapter>
    </WithStylesContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
