import { type CoinsData} from '../../types'
import { TableRow, TableCell, TableSortLabel, Typography, TableHead } from '@mui/material';

interface HeadCellInterface{
  name: string;
  id: keyof CoinsData;
  sortable?: boolean;
  align: 'center'| 'left'| 'right'
}

const headCells: HeadCellInterface[] = [
    {name: '', id: 'market_cap_rank', sortable: false, align: 'left'},
    {name: '#', id: 'market_cap_rank', align: 'left'},
    {name: 'Coin', id: 'name', align: 'left'},
    {name: 'Price', id: 'current_price', align: 'right'},
    {name: '1h', id: 'price_change_percentage_1h_in_currency', align: 'right'},
    {name: '24h', id: 'price_change_percentage_24h', align: 'right'},
    {name: '7d', id: 'price_change_percentage_7d_in_currency', align: 'right'},
    {name: '24h Volume', id: 'total_volume', align: 'right'},
    {name: 'Market Cap', id: 'market_cap', align: 'right'},
    {name: 'Last 7 Days', id: 'sparkline_in_7d', sortable: false, align: 'center'}
]

interface TableHeadProps {
  order: "desc" | "asc";
  sortBy: string;
  onSort: (event: React.MouseEvent<unknown>, property: keyof CoinsData) => void;  
}


export default function CoinsTableHead({order, sortBy, onSort}: TableHeadProps){
    return(
        <TableHead sx={{backgroundColor: 'white'}}>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.align}
                padding= 'normal'
                sortDirection={sortBy === headCell.id ? order : false}
              >
               {headCell.sortable !== false ? (
                  <TableSortLabel
                    active={sortBy === headCell.id}
                    direction={sortBy === headCell.id ? order : 'asc'}
                    onClick={(event)=>{
                      onSort(event, headCell.id)
                    }}
                  >
                    <Typography variant='subtitle2'>{headCell.name}</Typography>
                  </TableSortLabel>
               ) : (
                <Typography variant='subtitle2'>{headCell.name}</Typography>
              )} 
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
    )
}