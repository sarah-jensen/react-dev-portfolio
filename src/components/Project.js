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
        margin: '16px'
    },
    media: {
        height: 250,
    },
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
            <Typography 
                gutterBottom 
                variant="h5" 
                component="h2"
            >
            {props.title}
            </Typography>
            <Typography 
                variant="body2" color="textSecondary" component="p"
                href={props.appUrl}
            >
            View Application
            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button 
            size="small" 
            color="primary"
            href={props.gitHubUrl}
        >
        View on GitHub
        </Button>              
    </CardActions>
</Card>
)
};
export default Project;