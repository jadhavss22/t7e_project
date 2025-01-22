import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CardComponent from './CardComponent';
import India from "@react-map/india";
import PieChart from './PieCharts';
function BodyComponent({isToggle}){ 
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };

  return (
    <div>

{
	isToggle && (selectedCard === null ? (
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5].map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card}>
              <CardComponent onClick={() => handleCardClick(card)} />
            </Grid>
          ))}
        </Grid>
      ) :
   (  
      selectedCard === 2 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">India App Registered User Count</Typography>
                <img alt='india' src='https://img.freepik.com/premium-vector/map-india-with-beautiful-sun-clouds-body_967740-6626.jpg?semt=ais_incoming' style={{ height: '60vh'  }}   />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography style={{  marginBottom:'20px'  }}  variant="h6">Vehicle Type</Typography>
                <div style={{ height: '60vh', display:'flex' , justifyContent:'center'   }}>
                {/* Placeholder for pie chart */}
                  <PieChart />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6">Card {selectedCard} Details</Typography>
      )))
	  
	}
    </div>
  );
}

export default BodyComponent;