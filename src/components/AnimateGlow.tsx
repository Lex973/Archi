// AnimatedGlowBackground.tsx
import { Box } from "@mui/material";

interface GlowOrb {
    color: string;
    size: number;
    duration: number;
    delay: number;
    startX: number;
    startY: number;
}

interface AnimatedGlowBackgroundProps {
    orbs?: GlowOrb[];
    children?: React.ReactNode;
}

const defaultOrbs: GlowOrb[] = [
    { color: "rgba(34, 197, 94, 0.18)",  size: 800, duration: 18, delay: 0,   startX: 10, startY: 20 },
    { color: "rgba(16, 185, 129, 0.15)", size: 700, duration: 24, delay: -7,  startX: 80, startY: 70 },
    { color: "rgba(74, 222, 128, 0.12)", size: 600, duration: 20, delay: -13, startX: 50, startY: 90 },
    { color: "rgba(134, 239, 172, 0.1)", size: 500, duration: 28, delay: -4,  startX: 85, startY: 15 },
];

const AnimatedGlowBackground = ({ orbs = defaultOrbs, children }: AnimatedGlowBackgroundProps) => {
    return (
        <Box sx={{ position: "relative",                         display: "flex",
            alignItems: "center",
            justifyContent: "center",overflow: "hidden", width: "100%", minHeight: 'calc(100vh - 115px)', background: "rgba(248, 252, 248, 1)" }}>
            {orbs.map((orb, i) => (
                <Box
                    key={i}
                    sx={{
                        position: "absolute",
                        width: orb.size,
                        height: orb.size,
                        borderRadius: "50%",
                        background: orb.color,
                        filter: "blur(120px)",
                        left: `${orb.startX}%`,
                        top: `${orb.startY}%`,
                        transform: "translate(-50%, -50%)",
                        animation: `glow-move-${i} ${orb.duration}s ease-in-out infinite alternate`,
                        animationDelay: `${orb.delay}s`,
                        [`@keyframes glow-move-${i}`]: {
                            "0%":   { transform: "translate(-50%, -50%) scale(1)" },
                            "33%":  { transform: `translate(calc(-50% + ${i % 2 === 0 ? 150 : -120}px), calc(-50% + ${i % 2 === 0 ? -100 : 80}px)) scale(1.15)` },
                            "66%":  { transform: `translate(calc(-50% + ${i % 2 === 0 ? -80 : 100}px), calc(-50% + ${i % 2 === 0 ? 120 : -110}px)) scale(0.9)` },
                            "100%": { transform: `translate(calc(-50% + ${i % 2 === 0 ? 60 : -70}px), calc(-50% + ${i % 2 === 0 ? 70 : 60}px)) scale(1.1)` },
                        },
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
            ))}
            <Box sx={{ position: "relative", zIndex: 1 }}>
                {children}
            </Box>
        </Box>
    );
};

export default AnimatedGlowBackground;