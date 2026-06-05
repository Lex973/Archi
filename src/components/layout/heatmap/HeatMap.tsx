import {Container, Paper, Typography, useTheme, Box} from "@mui/material";
import {Treemap, ResponsiveContainer} from "recharts";
import useHeatMapData from "../../../hooks/useHeatMapData";
import Tooltip from "../../heatmapTooltip/Tooltip";
import {useState} from "react";
import type {CustomContentProps} from "../../../types";

const HeatMap = () => {
    const theme = useTheme()
    const filteredData = useHeatMapData()

    const [showTooltip, setShowTooltip] = useState<boolean>(false)

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    const [hoverElementData, setHoverElementData] = useState({
        name: '',
        image: '',
        symbol: '',
        marketCap: 0,
        procent: 0,
        isPositive: false,
    })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (!showTooltip) setShowTooltip(true)
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });

    }
    const handleMouseLeave = () => {
        if (showTooltip) setShowTooltip(false)
    }
    return (
        <Container data-testid="heatmap-container" maxWidth='xl' disableGutters sx={{ mt: 5 }}>
            <Paper sx={{px: 3, py: 3, borderRadius: 2, backgroundColor: 'white',}}>
                <Typography variant='h5' sx={{fontWeight: 'bold'}}>
                    Market heatmap
                </Typography>

                <Typography sx={{ mt: 2, mb: 2, color: theme.palette.text.secondary}}>
                    A quick view of the strongest 24h performers and the coins with the biggest watchlists.
                </Typography>

                <Box
                    onMouseMove={(e) => handleMouseMove(e)}
                    onMouseLeave={handleMouseLeave}
                    sx={{position: 'relative'}}
                >
                    <ResponsiveContainer width="100%" height={500}>
                        <Treemap
                            data={filteredData}
                            dataKey='size'
                            stroke='#fff'
                            fill="#8884d8"
                            content={<CustomContent setHoverElementData={setHoverElementData} name={""} percentage={0}
                                                    size={0} symbol={""} image={""} marketCap={0} fill={""} x={0} y={0}
                                                    width={0} height={0}/>}
                        >
                        </Treemap>
                    </ResponsiveContainer>

                    {showTooltip && <Tooltip position={position} hoverElementData={hoverElementData}/>}
                </Box>

            </Paper>
        </Container>
    );
};

export default HeatMap;

const CustomContent = (props: CustomContentProps) => {
    const { x, y, width, height, name, percentage, size, symbol, image, marketCap, setHoverElementData} = props;

    const filterPercentage = () => {
        if (!percentage) return '0%'
        if (percentage > 0) {
            return `+${Number(percentage?.toFixed(3))}%`;
        } else {
            return `${Number(percentage?.toFixed(3))}%`
        }
    }

    const getFontSize = (size: number) => {
        if (size > 1_000_000) return 50;
        if (size > 500_000) return 30;
        if (size > 250_000) return 20;
        return 15;
    };
    const fontSize = getFontSize(size);

    const get_Y_percentage = () => {
        if (fontSize === 50) return 35;
        if (fontSize === 30) return 30;
        if (fontSize === 20) return 25;
        return 20;
    }

    return (
        <g onMouseEnter={() => setHoverElementData({
            name: name,
            symbol: symbol,
            marketCap: marketCap,
            image: image,
            procent: percentage,
            isPositive: percentage > 0,
        })}>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: props.fill,
                    stroke: '#fff'
                }}
            />

            <text
                x={x + width / 2}
                y={y + height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#fff"
                fontSize={fontSize}
                fontFamily='Roboto'
            >
                {name}
            </text>

            <text
                x={x + width / 2}
                y={y + height / 2 + (get_Y_percentage())}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#fff"
                fontSize={12}
            >
                {filterPercentage()}
            </text>
        </g>
    );
};