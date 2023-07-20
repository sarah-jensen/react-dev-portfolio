import React from 'react';
import ResumePDF from '../../assets/files/Sarah-Jensen_resume.pdf';
import BackEnd from '../../assets/images/back-end.png';
import FrontEnd from '../../assets/images/front-end.png';
import SkillCard from '../SkillCard.js';
import { Grid, Button, Container, makeStyles } from '@material-ui/core';
import { GetApp, Done } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    padding: '16px',
    margin: '8px',
    border: 2,
    backgroundColor: '#9daeb3',
    color: '#0f4c5c',
    flexBasis: 'calc(50% - 16px)',
  },
  button: {
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
  },
  media: {
    height: 250,
  },
  buttonLeft: {
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
    variant: 'contained',
    size: 'small',
  },
  buttonRight: {
    background: 'linear-gradient(45deg, #0a9396 30%, #0f4c5c 90%)',
    color: '#e5e6e4',
    variant: 'contained',
    size: 'small',
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
}));

export const Resume = () => {
  const classes = useStyles();

  const frontEnd = [
    'HTML',
    'CSS (Tailwind, Material-UI, Bootstrap)',
    'JavaScript',
    'JQuery',
    'React',
  ];
  const backEnd = [
    'Node',
    'Express',
    'MySQL & Sequelize',
    'MondoDB & Mongoose',
    'CRUD',
  ];

  return (
    <Container>
      <Button
        variant='contained'
        size='large'
        className={classes.button}
        startIcon={<GetApp />}
        href={ResumePDF}
      >
        Download PDF
      </Button>

      <Grid
        container
        className={classes.root}
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Grid
          item
          xs
        >
          <SkillCard
            image={FrontEnd}
            title='Front-End Proficiencies'
            skills={frontEnd}
          />
        </Grid>

        <Grid
          item
          xs
        >
          <SkillCard
            image={BackEnd}
            title='Back-End Proficiencies'
            skills={backEnd}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Resume;
