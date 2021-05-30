import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

//import Layout from './components/Layout'
//import Dashboard from './pages/Dashboard'
//import List from './pages/List'

import Routes from './routes';
import dark from './styles/themes/dark';
 
const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;


