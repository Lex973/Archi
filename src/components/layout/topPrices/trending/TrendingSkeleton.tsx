import { Paper, List, ListItem, Skeleton } from "@mui/material";
import TrendingItemSkeleton from "./TrendingItemSkeleton";

const TrendingSkeleton = () => {
    return (
        <Paper
            sx={{
                px: 2,
                py: 2,
                width: '49%',
                borderRadius: 4,
                boxShadow: 'none',
                border: '1px solid rgba(17, 24, 39, 0.08)',
                height: 338,
            }}
        >
            <Skeleton variant="text" width={120} height={28} sx={{ mb: 2 }} />

            <List sx={{ m: 0, p: 0 }}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <ListItem key={index} sx={{ m: 0, p: 0, pb: 2 }}>
                        <TrendingItemSkeleton />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default TrendingSkeleton;