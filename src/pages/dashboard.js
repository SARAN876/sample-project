import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CostomCard from '../components/card';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PieChart from '../components/pieChart';
import { Card } from '@mui/material';
import BarChats from '../components/barChat';
import ProductTable from '../components/prodecttable';
import { Icon } from '@iconify-icon/react';

function Dashboard() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <>
      <div style={{ padding: '1.3rem' }}>
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <div>Hello Shahrukh 👋,</div>
          </Grid>
          <Grid item xs={12} sm={2.5}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <CostomCard
              title="Earning"
              amount="$198k"
              percentage="37.8% this month"
              icon={<Icon icon="ant-design:dollar-circle-outlined" width="5em" height="5em"  style={{color: 'green'}} />}
              color="#80ffcc"
              indicater='green'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CostomCard
              title="Expenses"
              amount="$2.4k"
              percentage="25.5% this month"
              icon={<Icon icon="charm:notes" width="4em" height="4em"  style={{color: '#9716a8'}} />}
              color="#d59beb"
              indicater='red'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CostomCard
              title="Savings"
              amount="$2.4k"
              percentage="12.3% this month"
              icon={<Icon icon="fluent:book-coins-24-regular" width="4em" height="4em"  style={{color: 'blue'}} />}
              color="#aed0e8"
              indicater='red'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CostomCard
              title="Investments"
              amount="$89k"
              percentage="45.6% this month"
              icon={<Icon icon="solar:bag-5-linear" width="4em" height="4em"  style={{color: '#e61e2b'}} />}
              color="#f590bc"
              indicater='green'
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={8}>
            <Card sx={{ width: '100%', padding: '20px' }}>
              <BarChats />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3.6}>
            <Card sx={{ width: '100%', height:'85%',padding: '20px' }}>
              <PieChart />
            </Card>
          </Grid>
        </Grid>
        <br />
        <Card sx={{ width: '96%', padding: '20px' }}>
          <ProductTable />
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
