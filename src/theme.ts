import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: '#4bcc00',
        },

        secondary: {
            main: '#3ea800',
            light: 'rgba(75, 204, 0, 0.05)'
        },

        text: {
            primary: '#111827',
            secondary: '#6b7280',
        },

        background: {
            paper: '#f8fafc',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                }
            }
        }
    }
})