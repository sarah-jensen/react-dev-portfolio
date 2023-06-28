import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
})
);

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar 
        position="static"
        // style={{
        //     backgroundColor: 'e9d8a6',
        //     }}
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
