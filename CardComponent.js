import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CardComponent({ onClick }) {
  const randomAvg = (Math.random() * 10).toFixed(2); // Generate random avg

  return (
    <Card onClick={onClick}>
      <CardContent>
        <Typography variant="h6">Total Downloads</Typography>
        <Typography variant="h5">{Math.floor(Math.random() * 1000)}</Typography>
        <Typography variant="body2" color="textSecondary">
          Last 7 Days
        </Typography>
        <Typography variant="body2">{randomAvg} avg</Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;