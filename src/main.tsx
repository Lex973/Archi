import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider, CssBaseline} from "@mui/material";
import {theme} from "./theme.ts";
import { Provider } from 'react-redux'
import {store} from "./store/store.ts";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
)
