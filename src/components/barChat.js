import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Grid, MenuItem, Select, Typography } from '@mui/material';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 300,
        type: 'bar',
        grid: { show: false } 
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: { position: 'top' },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val,
        offsetY: -20,
        style: { fontSize: '12px', colors: ["#304758"] }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: { colorFrom: '#D8E3F0', colorTo: '#BED1E6', stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 }
          }
        },
        tooltip: { enabled: true }
      },
      yaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { show: false, formatter: (val) => val }
      },
    }
  });

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    let newData = [];
    switch (selectedOption) {
      case 'yearly': newData = [44, 55, 41, 17, 15, 2.3, 3.1, 4.0, 10.1, 4.0, 5.5, 3.5]; break;
      case 'quarterly': newData = [10, 2.0, 3.0, 4.0, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8]; break;
      case 'halfyearly': newData = [25, 35, 45, 31, 40, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8]; break;
      case 'monthly': newData = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 14, 0.8, 0.5, 0.2]; break;
      default: newData = [];
    }
    setChartData({ ...chartData, series: [{ data: newData }] });
  };

  return (
    <div>
      <div id="chart">
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h4" sx={{ fontSize: '1.2rem' }} fontWeight="bold">Overview</Typography>
            <div>Monthly Earning</div>
          </Grid>
          <Grid item>
            <Select value="monthly" onChange={handleOptionChange} size='small'>
              <MenuItem value="" selected disabled>Select Option</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
              <MenuItem value="quarterly">Quarterly</MenuItem>
              <MenuItem value="halfyearly">Half-Yearly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Chart options={chartData.options} series={chartData.series} type="bar" height={220} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
