import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Grid, Select, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const SearchField = styled(TextField)({
  marginBottom: '1rem',
});

const ProductTable = () => {
  
  const products = useSelector(({ exp }) => exp.data);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('30');

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  useEffect(() => {
    setFilterOption('30');
  }, []);

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterOption === '' || product.totalSales >= parseInt(filterOption))
  );

  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6} md={6} lg={6}>
          <h3>Product Sell</h3>
        </Grid>
        <Grid item xs={6} md={6} lg={6} container justifyContent="flex-end" alignItems="center" spacing={2}>
          <Grid item>
            <SearchField
              fullWidth
              size='small'
              variant="outlined"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Select value={filterOption} size='small' onChange={handleFilterChange}>
              <MenuItem value="" >All</MenuItem>
              <MenuItem value="30">Last 30 days</MenuItem>
              <MenuItem value="60">Last 60 days</MenuItem>
              <MenuItem value="90">Last 90 days</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="right">Total Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <img src={product.image} alt={product.productName} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" fontWeight="bold">
                        {product.productName}
                      </Typography>
                      <div>{product.info}</div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="center">{product.stock} in stock</TableCell>
                <TableCell align="center">
                  <Typography variant="body1" fontWeight="bold">
                    ${product.price}
                  </Typography>
                </TableCell>
                <TableCell align="right">{product.totalSales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
