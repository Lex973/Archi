import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import AnimatedGlowBackground from "../AnimateGlow.tsx";
import Header from "../layout/header/Header.tsx";

export default function RegistrationPage() {
    return (
        <Box>
            <Header/>

            <AnimatedGlowBackground>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 10
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            width: 520,
                            p: 5,
                            borderRadius: "24px",
                            background: "rgba(255,255,255,0.75)",
                            backdropFilter: "blur(14px)",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: 700, mb: 1 }}
                        >
                            Create account
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ color: "text.secondary", mb: 4 }}
                        >
                            Sign up to get started
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2.5,
                                mb: 4,
                            }}
                        >
                            <TextField
                                fullWidth
                                label="Email"
                                size="medium"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "16px",
                                        background: "rgba(255,255,255,0.9)",
                                        fontSize: "16px",
                                        height: 56,
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "16px",
                                        background: "rgba(255,255,255,0.9)",
                                        height: 56,
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Confirm password"
                                type="password"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "16px",
                                        background: "rgba(255,255,255,0.9)",
                                        height: 56,
                                    },
                                }}
                            />
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                borderRadius: "16px",
                                py: 1.6,
                                fontSize: "16px",
                                textTransform: "none",
                                fontWeight: 600,
                                background: "#111",
                                color: "#fff",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                "&:hover": {
                                    background: "#222",
                                },
                            }}
                        >
                            Create account
                        </Button>
                    </Paper>
                </Box>
            </AnimatedGlowBackground>
        </Box>
    );
}