import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from "./styles/global";

import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Profile } from './pages/Profile';
import { FuncHome } from './pages/FuncHome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)
