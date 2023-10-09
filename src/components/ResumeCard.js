import React from "react";
import ResumePDF from '../assets/files/Sarah-Jensen_resume.pdf';
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { 
  GetApp, 
} from '@material-ui/icons';



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
    height: 400,
  },
  button: {
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
    marginBottom: "-24px"
  },
})
);

//export ResumeCard to use in Contact page
const ResumeCard = (props) => {
  const classes = useStyles();

  return (

      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={props.image}
            alt={props.imgAlt}
            />
          <CardContent>
            <CardActionArea>
          <Button
        variant='contained'
        size='large'
        className={classes.button}
        startIcon={<GetApp />}
        href={ResumePDF}
        target='_blank'
      >
        Download PDF
      </Button>
        </CardActionArea>
          </CardContent>
      </Card>
  );
};


  
export default ResumeCard;
