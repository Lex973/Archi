import {Button, useTheme} from "@mui/material";

interface mainButtonProps {
    active: string;
    setActive: (active: string) => void;
    children: string;
}
const MainButton = ({active, setActive, children}: mainButtonProps) => {
    const theme = useTheme()
    return (
        <Button variant="contained" sx={{
            backgroundColor: `${active === children ? theme.palette.secondary.light : 'white'}`,
            boxShadow: 'none',
            textTransform: 'none',
            borderRadius: 2,
            color: `${active === children ? theme.palette.secondary.main : 'black'}`,
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                boxShadow: 'none',
            },
        }}
                onClick={() => setActive(children)}
        >
            {children}
        </Button>
    );
};

export default MainButton;