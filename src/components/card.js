import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

function CustomCard({ title, amount, percentage, icon, color, indicater }) {
  return (
    <Card variant="outlined" sx={{ borderRadius: '5%' }}>
      <CardContent sx={{ width: '100%' }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent='-moz-initial'
        >
          <Grid item>
            <Paper
              sx={{
                width: 70,
                height: 70,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                bgcolor: color,
              }}
            >
              {icon}
            </Paper>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ fontSize: '0.5rem' }}>{title}</Typography>
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>{amount}</Typography>
            <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
              <span>
                <Icon
                  icon={indicater === 'green' ? "mingcute:arrow-up-line" : "mingcute:arrow-down-line"}
                  width="0.7em"
                  height="0.7em"
                  style={{ color: indicater==='green'? 'green':'red' }}
                />
              </span>
              {percentage}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
