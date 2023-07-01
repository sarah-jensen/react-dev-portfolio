import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Avatar from "../../assets/images/avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "16px",
    marginTop: "44px",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    backgroundColor: "#9daeb3",
    color: "#0f4c5c",
  },
  media: {
    borderRadius: "50%",
  },
  imgCard: {
    borderRadius: "50%",
    flexGrow: 1,
    padding: "16px",
    marginTop: "44px",
    background: "linear-gradient(to right bottom, #5f0f40 30%, #6f1d1b 90%)",
    color: "#0f4c5c",
  },
}));

export const AboutMe = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid 
        container 
        display="flex" 
        box="border-box" 
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        >
        <Grid item xs={5}>
          <Card className={classes.imgCard}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={Avatar}
                alt="A woman with red hair and glasses wears a black hat and smiles at the camera."
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid 
          item 
          xs={6}
         >
          <Card className={classes.root}>
            <Typography paragraph variant="body1" width="20px">
              Full-stack developer, Speech-Language Pathologist, single, mom and
              companion to one dignified doggo. Fan of books, Balboa, and
              geekery. Magpie of hobbies and pasttimes. Direct and transparent
              communication is my life's work. That and pursuing the perfect bowl of popcorn.
            </Typography>
            <Typography variant="body1" width="20px">
              Based in Los Angeles, CA.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container display="flex" box="border-box" spacing={2}>
        <Grid item xs>
          <Card className={classes.root}>
            <Typography paragraph variant="body1">
               I'm excited to bring my theatre and special education background into web development by blending engagement with accessiblity to enhance user experience.
            </Typography>
            <Typography variant="body1">
               My professional expertise in the realm of communication is an asset that supports intra and inter team collaboration and problem solving.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
