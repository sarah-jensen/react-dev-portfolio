import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '16px',
    margin: '8px',
    border: 0,
    backgroundColor: '#9daeb3',
    color: '#0f4c5c',
  },
  media: {
    height: 400,
  },
  button: {
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
    padding: 5,
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

//create Typography component for each item in a list of skills
function skillList(props) {
  return (
    <div>
      {props.skills.map((skill, index) => (
        <Typography
          key={index}
          paragraph
          component='div'
          variant='h6'
        >
          {skill}
        </Typography>
      ))}
    </div>
  );
}

//export SkillCard to use in Resume page component
const SkillCard = (props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  //function to handle click on expand icon
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        alt={props.imgAlt}
      />
      <CardActionArea>
        <CardContent>
          <Typography
            variant='h5'
            component='h2'
            style={{
              color: '#283845',
              fontWeight: 'bold',
              marginTop: '-8px',
            }}
          >
            {props.title}
            <IconButton
              className={[classes.button, clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })]}
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
        <CardContent>{skillList(props)}</CardContent>
      </Collapse>
    </Card>
  );
};

export default SkillCard;
