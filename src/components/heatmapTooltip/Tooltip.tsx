import {Paper, Typography, Box} from "@mui/material";
import {formatMarketCap} from "../../utils/utilsFunc";

type pos = {
    x: number;
    y: number;
}
type hoverElementData = {
    name: string;
    symbol: string;
    image: string;
    marketCap: number;
    procent: number;
    isPositive: boolean;
}
interface TooltipProps {
    position: pos;
    hoverElementData: hoverElementData;
}
const CoinTooltip = ({position, hoverElementData}: TooltipProps) => {
    const procent24H = hoverElementData?.procent != null
        ? `${hoverElementData.isPositive ? '+' : ''} ${hoverElementData.procent.toFixed(3)}%`
        : '—';
    const formattedMarketCap = formatMarketCap(hoverElementData.marketCap)

    if (!hoverElementData.image) return null;
    return (
        <Paper
            data-testid="tooltip"
            elevation={0}
            sx={{
                transition: 'top 0.2s ease, left 0.2s ease',
                width: 130,
                border: "0.5px solid",
                borderColor: "divider",
                borderRadius: 1.5,
                p: 1,
                pointerEvents: "none",
                position: "absolute",
                top: position.y + 10,
                left: position.x + 10,
            }}
        >
            <Box display="flex" alignItems="center" gap={0.75} mb={1}>
                <Box
                    component="img"
                    src={hoverElementData.image}
                    sx={{ width: 20, height: 20, borderRadius: "50%" }}
                />
                <Box>
                    <Typography sx={{ fontSize: 11, fontWeight: 500, lineHeight: 1 }}>{hoverElementData.name}</Typography>
                    <Typography sx={{ fontSize: 9, color: "text.secondary" }}>{hoverElementData.symbol}</Typography>
                </Box>
            </Box>

            <Box sx={{ borderTop: "0.5px solid", borderColor: "divider", pt: 0.75, display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ fontSize: 9, color: "text.secondary" }}>24h</Typography>
                    <Box sx={{ px: 0.5, py: 0.25, borderRadius: 0.5, background: `${hoverElementData.isPositive ? '#dcfce7' : '#fee2e2'}`, color: `${hoverElementData.isPositive ? '#16a34a' : 'dc2626'}`, fontSize: 9, fontWeight: 500 }}>
                        {procent24H ?? '0'}
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ fontSize: 9, color: "text.secondary" }}>Cap</Typography>
                    <Typography sx={{ fontSize: 9, fontWeight: 500 }}>${formattedMarketCap}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default CoinTooltip;