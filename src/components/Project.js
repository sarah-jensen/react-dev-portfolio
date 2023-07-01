import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import {
  ExpandMore,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   padding: "16px",
   margin: "8px",
   border: 0,
   backgroundColor: "#9daeb3",
    color: "#0f4c5c",
  },
  media: {

    height: 250,
  },
  buttonLeft: {
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
    variant: "contained" ,
    size:"small"
  },
  buttonRight: {
    background: 'linear-gradient(45deg, #0a9396 30%, #0f4c5c 90%)',
    color: '#e5e6e4',
    variant: "contained" ,
    size:"small"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})
);

export const Project = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.thumbnail}
            alt={props.imgAlt}
          
          />
          <CardContent>
            <Typography  variant="h5" component="h2" style={{
                color:"#283845", marginTop:"-8px"}}>
              {props.title}

            <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMore />
        </IconButton>
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
            <Button className={classes.buttonLeft} href={props.appUrl}  style={{
            marginLeft: "8px", marginRight: "8px"}}>
              View Application
            </Button>

            <Button className={classes.buttonRight} href={props.gitHubUrl} style={{
            marginLeft: "8px"}}>
              View on GitHub
            </Button>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.descriptionP1}
          </Typography>
          <Typography paragraph>
          {props.descriptionP2} 
          </Typography>
          <Typography>
          {props.descriptionP3} 
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
  );
};
export default Project;
