// import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from "react";
import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';

// import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Body from './Body'

//onClick={toggleDrawer}

function LeftDrawer({ drawerOpen, toggleDrawer}) {
    const [component, setComponent] = useState()
    const [open, setOpen] = React.useState();
    const handleCardClick = (cardNumber) => {
        setComponent(cardNumber)

      };
// const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };
   
  return (
    <>
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
       <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
    <List>
      {['MLP Dashboard', 'RLP Dashboard', 'View Mechanic', 'View Retailer','User Insights', 'SKU-Wise Data', 'Slab-Based Consumption', 'View Redemption'].map((text, index) => (
        <ListItem key={text} disablePadding onClick={(text) => handleCardClick(text)} >
          <ListItemButton >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </Box>
    </Drawer>
    
    
<Body isToggle ={component} /></>
  );
}

export default LeftDrawer;