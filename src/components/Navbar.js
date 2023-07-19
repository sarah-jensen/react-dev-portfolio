import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Container,
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
    marginBottom: '5%',
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
    <Container disableGutters sx={{ width: 1 }} justifyContent='space-evenly'>
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
            orientation='vertical'
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
            >Resume</Button>
            <Button 
            className={currentPage === 'Contact' ? `${classes.selected}` : `${classes.inactive}`}
            onClick={() => handlePageChange('Contact')}>Contact</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      </Container>
  );
};

export default Navbar;