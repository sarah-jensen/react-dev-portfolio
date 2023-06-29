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
    color: '#e9d8a6',
    padding: 2,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  
});

export const Navbar = () => {
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
            color="primary"
            aria-label="text primary button group"
            // backgroundColor= 
            // TODO: add highlight to selected Navigation button
          >
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Resume</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};
