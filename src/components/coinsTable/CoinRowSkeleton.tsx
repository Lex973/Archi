import { TableRow, TableCell, Skeleton, Box, IconButton } from "@mui/material";

const TableRowSkeleton = () => {
    return (
        <TableRow hover sx={{ cursor: 'pointer', backgroundColor: 'white' }}>
            {/* Star Icon */}
            <TableCell padding="checkbox" sx={{ width: '5%' }}>
                <IconButton>
                    <Skeleton variant="circular" width={24} height={24} />
                </IconButton>
            </TableCell>

            {/* Market Cap Rank */}
            <TableCell align="left" padding="none" sx={{ paddingLeft: '16px', width: '10%' }}>
                <Skeleton variant="text" width={50} height={20} />
            </TableCell>

            {/* Coin Info (Image and Name) */}
            <TableCell component="th" scope="row" padding="none" sx={{ width: '30%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Skeleton variant="circular" width={24} height={24} />
                    <Skeleton variant="text" width={100} height={20} />
                </Box>
            </TableCell>

            {/* Coin Price */}
            <TableCell padding="none" sx={{ width: '15%', textAlign: 'right' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="text" width={80} height={20} />
                </Box>
            </TableCell>

            {/* Price Change 1h */}
            <TableCell padding="none" sx={{ width: '10%', textAlign: 'right' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="text" width={60} height={20} />
                </Box>
            </TableCell>

            {/* Price Change 24h */}
            <TableCell padding="none" sx={{ width: '10%', textAlign: 'right' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="text" width={60} height={20} />
                </Box>
            </TableCell>

            {/* Total Volume */}
            <TableCell align="right" padding="none" sx={{ width: '15%' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="text" width={80} height={20} />
                </Box>
            </TableCell>

            {/* Market Cap */}
            <TableCell align="right" padding="none" sx={{ paddingRight: '10px', width: '20%' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="text" width={80} height={20} />
                </Box>
            </TableCell>

            {/* SparkLine */}
            <TableCell align="right" padding="none" sx={{ paddingLeft: '10px', minWidth: '150px' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="rectangular" width={120} height={20} />
                </Box>
            </TableCell>

            <TableCell align="right" padding="none" sx={{ paddingLeft: '10px', minWidth: '150px' }}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Skeleton variant="rectangular" width={140} height={40} />
                </Box>
            </TableCell>
        </TableRow>
    );
};

export default TableRowSkeleton;