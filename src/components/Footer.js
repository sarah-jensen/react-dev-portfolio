import React from "react";

import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
 
} from "@material-ui/core";
import {
    ArrowLeft,
    ArrowRight,
    GitHub,
    LinkedIn
 } from '@material-ui/icons';

export const Footer = () => {
    const [value, setValue] = React.useState(0);

  return (
    
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
            label="Previous" 
            icon={<ArrowLeft />} 
        />
        <BottomNavigationAction 
            label="GitHub" 
            icon={<GitHub />} 
        />
        <BottomNavigationAction 
            label="LinkedIn" 
            icon={<LinkedIn />} 
        />
        <BottomNavigationAction 
            label="Next" 
            icon={<ArrowRight />} 
        />
        
      </BottomNavigation>
  
  );
}
