import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4', 
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }, 
  selected: {
    background: 'inherit',
    color: '#f9e652',
  },
  inactive: {
    background: 'inherit',
    color: 'inherit',
  }
});

export const Navbar = ({ currentPage, handlePageChange }) => {
  const classes = useStyles();


  return (
    <div >
      <AppBar 
        className={classes.root}
        position= "static"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Sarah Jensen
          </Typography>
          <ButtonGroup
            variant="text"
            aria-label="text primary button group"
            // TODO: add highlight to selected Navigation button
          >
            <Button 
              className={currentPage === 'AboutMe' ? `${classes.selected}` : `${classes.inactive}`}
              onClick={() => handlePageChange('AboutMe')}  
              >About Me</Button>
            <Button 
              className={currentPage === 'Portfolio' ? `${classes.selected}` : `${classes.inactive}`}
              onClick={() => handlePageChange('Portfolio')}  
            >Portfolio</Button>
            <Button 
              className={currentPage === 'Resume' ? `${classes.selected}` : `${classes.inactive}`}
              onClick={() => handlePageChange('Resume')}  
            >Contact</Button>
            <Button color="inherit">Resume</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

     
    </div>
  );
};

export default Navbar;