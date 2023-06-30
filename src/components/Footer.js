import React, { useState } from "react";

import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@material-ui/core";
import { positions } from "@material-ui/system";
import { ArrowLeft, ArrowRight, GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #db7c26 30%, #f6aa1c 90%)",
    color: "#e9d8a6",
    flexGrow: 1,
    
  },
});

export const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Box 
        display="flex" 
        maxWidth="sm" 
        justifyContent="center"
        alignSelf="flex-end"
    >
      <BottomNavigation
        className={classes.root}
        showLabels
        position="fixed"
        bottom={2}
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
    </Box>
  );
};
