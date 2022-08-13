import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './global-styles';
import { BrowserRouter } from 'react-router-dom';

// baseweb ui
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

ReactDOM.render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);