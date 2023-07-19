import React from 'react';
import ResumePDF from '../../assets/files/Sarah-Jensen_resume.pdf';
import BackEnd from '../../assets/images/back-end.png';
import FrontEnd from '../../assets/images/front-end.png';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { GetApp, Done } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    padding: '16px',
    margin: '8px',
    border: 2,
    backgroundColor: '#9daeb3',
    color: '#0f4c5c',
    width: 'min-content'
  },
  cardBox: {
    flexDirection: 'row',
    justifyContent: 'space-evently',
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
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

      <Box className={classes.cardBox}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={FrontEnd}
            />
            <CardContent>
              <Typography
                variant='h5'
                component='h2'
                style={{
                  color: '#283845',
                  marginTop: '-8px',
                }}
              >
                Front-End Proficiencies
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMore />
                </IconButton>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>HTML</Typography>
              <Typography paragraph>
                CSS (Tailwind, Material-UI, Bootstrap)
              </Typography>
              <Typography paragraph>JavaScript</Typography>
              <Typography paragraph>JQuery</Typography>
              <Typography paragraph>React</Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={BackEnd}
            />
            <CardContent>
              <Typography
                variant='h5'
                component='h2'
                style={{
                  color: '#283845',
                  marginTop: '-8px',
                }}
              >
                Back-End Proficiencies
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMore />
                </IconButton>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>Node</Typography>
              <Typography paragraph>Express</Typography>
              <Typography paragraph>MySQL & Sequelize</Typography>
              <Typography paragraph>MondoDB & Mongoose</Typography>
              <Typography paragraph>CRUD</Typography>
              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </Container>
  );
};
export default Resume;
