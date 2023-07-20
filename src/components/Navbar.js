import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
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
    <Container maxWidth disableGutters sx={{ width: 1 }} justifyContent='space-evenly'>
      <AppBar 
        className={classes.root}
        position= "static"
      >
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
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
              size="small"
              >About Me</Button>
            <Button 
              className={currentPage === 'Portfolio' ? `${classes.selected}` : `${classes.inactive}`}
              onClick={() => handlePageChange('Portfolio')}  
              size="small"
            >Portfolio</Button>
            <Button 
              className={currentPage === 'Resume' ? `${classes.selected}` : `${classes.inactive}`}
              onClick={() => handlePageChange('Resume')}  
              size="small"
            >Resume</Button>
            <Button 
            className={currentPage === 'Contact' ? `${classes.selected}` : `${classes.inactive}`}
            onClick={() => handlePageChange('Contact')}
            size="small"
            >Contact</Button>
            
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      </Container>
  );
};

export default Navbar;