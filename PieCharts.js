import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import { desktopOS, valueFormatter } from './webUsageStats'
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';

const PieCharts= () => {
  const data = {
    labels: ['Cars', 'Bikes', 'Trucks'],
    datasets: [
      {
        data: [300, 500, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

//   return <Pie data={data} />;
return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={300}
    />
  );
};

export default PieCharts;