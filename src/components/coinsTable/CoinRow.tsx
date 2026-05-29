import { TableRow, TableCell, Box, Typography, IconButton } from "@mui/material";
import { type CoinsData } from "../../types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { priceChangeDecor, numBeautify } from "../../utils";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

interface CoinPropsInterface {
  coin: CoinsData;
  isSelected: boolean;
  handleToggleIsFavorite: (coinID: string, isSelected: boolean) => void;
  labelId: string
}

export default function Coin({coin, isSelected, handleToggleIsFavorite, labelId}: CoinPropsInterface){
  return (
    <TableRow
      hover
      onClick={()=>console.log(coin.name)}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={coin.id}
      selected={isSelected}
      sx={{ cursor: 'pointer', backgroundColor: 'white'}}
    >
      <TableCell padding="checkbox">
        <IconButton onClick={()=> handleToggleIsFavorite(coin.id, isSelected)}>
          {isSelected ? <StarIcon/> : <StarBorderIcon/>}
        </IconButton>
      </TableCell>
      <TableCell align="left" padding="none" sx={{paddingLeft: '16px'}}><Typography variant="body2">{coin.market_cap_rank}</Typography></TableCell>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        padding="none"
      >
      <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Box component='img' src={coin.image} sx={{height: '24px', width: '24px'}}/>
          <Typography variant="subtitle2">{coin.name}</Typography>
      </Box> 
      </TableCell>
      <TableCell align="right" padding="none"><Typography variant="body2">${coin.current_price}</Typography></TableCell>
      <DecoratedPriceChange
        priceChange={coin.price_change_percentage_1h_in_currency}
      />
      <DecoratedPriceChange
        priceChange={coin.price_change_percentage_24h}
      />
      <DecoratedPriceChange
        priceChange={coin.price_change_percentage_7d_in_currency}
      />
      <TableCell align="right" padding="none"><Typography variant="body2">${numBeautify(coin.total_volume)}</Typography></TableCell>
      <TableCell align="right" padding="none" sx={{paddingRight:'10px'}}><Typography variant="body2">${numBeautify(coin.market_cap)}</Typography></TableCell>
      <TableCell align="right" padding="none" sx={{paddingLeft:'10px', minWidth: '150px'}}><CoinSparkLine price={coin.sparkline_in_7d.price}/></TableCell>
    </TableRow>
  )
}

function DecoratedPriceChange({priceChange}:{priceChange: number}){
    const formattedPriceChange = Math.abs(priceChange).toFixed(1);
    const isPositive = priceChange > 0
    return (
      <TableCell align="right">
        <Box sx={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'end'}}>
          {priceChangeDecor(isPositive).decor}
          <Typography variant="body2" color={priceChangeDecor(isPositive).color}>{formattedPriceChange}</Typography>
        </Box>
      </TableCell>
    )
}

function CoinSparkLine({price}:{price: number[]}){
  const isDynamicPositive = price[price.length - 1] - price[0] >= 0;
  const color = isDynamicPositive ? 'green' : 'red';
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);

  return (
      <SparkLineChart data={price} color={color} height={50} yAxis={{min: minPrice, max: maxPrice}} slotProps={{line:{strokeWidth: 1}}}></SparkLineChart>
  )
}