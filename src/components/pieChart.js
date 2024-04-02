import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Typography, useMediaQuery } from '@mui/material';

const ApexChart = () => {
  const [chartData] = useState({
    series: [44, 55, 65],
    options: {
      chart: {
        type: 'donut',
      },
      labels: [],
      plotOptions: {
        pie: {
          customScale: 1,
          donut: {
            labels: {
              show: true,
              name: {
                show: true 
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false, 
      },
      colors: ['#eb0799', '#860EE9','#E9720E'], 
      annotations: {
        points: [{
          x: '50%',
          y: '50%',
          text: 'Customers', 
          textAlign: 'center',
          offsetY: 10, 
          style: {
            fontSize: '20px', 
            fontWeight: 'bold',
            color: '#212121'
          }
        }]
      }
    }
  });

  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const newSize = isMobile ? 180 : 220;
    chartData.options.chart.height = newSize;
  }, [isMobile, chartData.options.chart]);

  return (
    <div>
      <Typography fontWeight='bold' fontSize='1rem'>Customers</Typography>
        <Typography>Customers that buy products</Typography>
        <br/>
        <br/>
      <div id="chart">
        
        <Chart options={chartData.options} series={chartData.series} type="donut"/>
      </div>
    </div>
  );
};

export default ApexChart;
