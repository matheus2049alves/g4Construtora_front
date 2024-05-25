import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from "./styles/global";

import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Profile } from './pages/Profile';
import { ClientHome } from './pages/Client-Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <ClientHome/>
    </ThemeProvider>
  </React.StrictMode>,
)
