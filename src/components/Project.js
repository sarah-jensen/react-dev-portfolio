import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
   padding: "16px",
   margin: "8px",
   border: 0,
   backgroundColor: '#e5e6e4'
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
  }
});

export const Project = (props) => {
  const classes = useStyles();
  return (

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.imgAlt}
            image={props.thumbnail}
            className={classes.media}
          />
          <CardContent>
            <Typography  variant="h5" component="h2" style={{
                color:"#283845", marginTop:"-8px"}}>
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                marginBottom:"-16px"}}
              href={props.appUrl}
            >
              {props.description}
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
      </Card>
  );
};
export default Project;
