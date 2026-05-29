import { type CoinsData} from '../../types.ts'
import { useState } from 'react';
import { Box, Paper, TableContainer, Table, TableBody, Typography, Pagination } from '@mui/material';
import CoinsTableHead from './CoinsTableHead.tsx'
import Coin from './CoinRow.tsx';
import { useGetCoinsListQuery } from '../../store/cryptoApiSlice.ts';
import {useSelector, useDispatch} from "react-redux";
import { selectPage } from '../../store/coinsSlice.ts';
import type {AppDispatch} from "../../store/store.ts";
import { page_changed } from '../../store/coinsSlice.ts';
import { calculateTotalPages } from '../../utils.tsx';
import CoinRowSkeleton from "./CoinRowSkeleton.tsx";

export default function CoinsTable() {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch<AppDispatch>();
  const {data, isFetching} = useGetCoinsListQuery({page: currentPage}, {pollingInterval: 60000});
  const [order, setOrder] = useState<'asc'|'desc'>('desc');
  const [sortBy, setSortBy] = useState<keyof CoinsData>('market_cap');
  const [selected, setSelected] = useState<CoinsData['id'][]>([]);

  const coinRowSkeletons = Array.from({length: 101}, (_, i) => {
    return <CoinRowSkeleton key={i}/>
  })

  const handleSort = (
      _event: React.MouseEvent<unknown>,
      property: keyof CoinsData,
    ) => {
      const isAsc = sortBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setSortBy(property);
    };
  
  const handleToggleIsFavorite = (coinID:CoinsData['id'], isSelected: boolean) =>{
    if(isSelected){
      setSelected(selected.filter(id => id !== coinID))
      return
    }
    setSelected([...selected, coinID]) 
  }

    const coins = data?.coins?.toSorted((a, b)=>{
    if(a[sortBy] > b[sortBy]){
      return order === 'desc' ? -1 : 1
    }
    if(a[sortBy] < b[sortBy]){
      return order === 'desc' ? 1 : -1
    }
    return 0
    })

  const coinsDisplay = (coins?.length ?? 0) > 0 ?
      coins?.map((coin, index) => {
        const isItemSelected = selected.includes(coin.id);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
            <Coin
                key={coin.id}
                coin={coin}
                isSelected={isItemSelected}
                handleToggleIsFavorite={handleToggleIsFavorite}
                labelId={labelId}
            />
        )
      }) :
      <Typography variant='h6'>No data to display</Typography>

    return (
      <Box maxWidth='xl' sx={{ mt: 5, mx: 'auto' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750}} aria-labelledby="CoinsTable" size="medium">
              <CoinsTableHead
                order={order}
                sortBy={sortBy}
                onSort={handleSort}
              />

              <TableBody>
                {isFetching ? coinRowSkeletons : coinsDisplay}
              </TableBody>

            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Pagination
              color='secondary'
              count={calculateTotalPages(data?.totalPages ?? 0)} 
              page={currentPage} 
              onChange={(_event, value) => dispatch(page_changed(value))} 
            />
          </Box>
        </Paper>
      </Box>
    );
}
