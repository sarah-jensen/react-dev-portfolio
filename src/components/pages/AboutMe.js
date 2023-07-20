import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import Avatar from '../../assets/images/avatar.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    marginTop: '2%'
  
  },
  media: {
    borderRadius: '50%',
  },
  imgCard: {
    borderRadius: '50%',
    padding: '.5rem',
    width: '10rem',
    height: '10rem',
    float: 'left',
    margin: '0 2rem 1rem 0',
    background: 'linear-gradient(to right bottom, #5f0f40 30%, #6f1d1b 90%)',
    color: '#0f4c5c',
  },
}));

export const AboutMe = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card className={classes.imgCard}>
        <CardActionArea>
          <CardMedia
            component='img'
            className={classes.media}
            image={Avatar}
            alt='A woman with red hair and glasses wears a black hat and smiles at the camera.'
          />
        </CardActionArea>
      </Card>

      <Typography
        paragraph
        variant='h6'
      >
        Hello there!
      </Typography>

      <Typography
        paragraph
        variant='h6'
      >
        I'm Sarah, a relatively newly minted full-stack developer. I've completed a full-stack web development bootcamp through the University of Berkeley Extension program, and am particularly excited about working React. I find it to be both dynamic and intuitive, and am looking for opportunities to work with it more extensively.
      </Typography>
      <Typography
        paragraph
        variant='h6'
      >
        I'm also a certificated and licensed Speech-Language Pathologist with a background in theater production and performance, and I've had the opportunity to blend these skill sets working in Special Education for the past ten years. While they may seem unrelated to web development, I see an opportunity to use them to enhance the experience of diverse users by blending engagement with accessiblity.
      </Typography>
      <Typography
        paragraph
        variant='h6'
      >
        Priorizing collaboration and clear communication has allowed me to work effectly with teams that include individuals who have a wide variety of experience and expertise, as well as differences in priority and personality. I've found that collaborating well with co-workers and other stakeholders is the best way to increase efficiency, productivity, and solve issues before they become problems.
      </Typography>
      <Typography
        variant='h6'
        width='20px'
      >
        I'm currently based in Los Angeles, CA. When I'm away from my desk you can usually find me hanging out with my dog, swing dancing, or crafting a new cosplay.
      </Typography>
    </Container>
  );
};

export default AboutMe;
