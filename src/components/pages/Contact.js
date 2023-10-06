import React, { useState, useRef } from 'react';
//import validation function
import validateEmail from '../../utils/validateEmail';
//import emailJS
import emailjs from '@emailjs/browser';

//Material-UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

//page styling
const useStyles = makeStyles((form) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#9daeb3',
    color: '#283845',
    opacity: '75%',
    padding: 20,
  },
  form: {
    flexGrow: 1,
    maxWidth: '90%',
  },
  input: {
    marginBottom: form.spacing(2),
    width: '100%',
  },
  inputMessage: {
    margin: 'auto',
  },
  button: {
    marginTop: form.spacing(2),
    background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
  },
}));

//Form to collect name, email address, and message text
export const Contact = () => {
  const classes = useStyles();

  const inputDefaultValues = {
    value: '',
    isEmpty: false,
    isValid: true,
  };

  const [name, setName] = useState(inputDefaultValues);
  const [email, setEmail] = useState(inputDefaultValues);
  const [message, setMessage] = useState(inputDefaultValues);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //function to handle input changes
  const handleInputChange = (inputValue, setState) => {
    setState((otherValues) => ({
      ...otherValues,
      value: inputValue,
    }));
  };

  //function to handle errors when a field is no longer in focus
  const handleBlur = (inputValue, setState) => {
    if (inputValue === '') {
      setState((otherValues) => ({
        ...otherValues,
        isEmpty: true,
      }));
    }

    if (setState === setEmail && !validateEmail(inputValue)) {
      setState((otherValues) => ({
        ...otherValues,
        isValid: false,
      }));
    }
  };

  const handleFocus = (state, setState) => {
    if (state.isEmpty) {
      setState((othervalues) => ({
        ...otherValues,
        isEmpty: false,
      }));
    }
    if (!state.isValid) {
      setState((otherValues) => ({
        ...otherValues,
        isValid: true,
      }));
    }
  };

    //function to handle form submission
    const sendEmail = (e) => {
      e.preventDefault();

     const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
     };

      emailjs
        .sendForm(
          'service_5pzh4xg',
          'template_myportfolio',
          templateParams,
          '3E0Yk9TPZMU0hY_dR'
        )
        .then(() => {
          resetFormFields(setName);
          resetFormFields(setemail);
          resetFormFields(setMessage);
          setSubmitted(true);
        })
        .catch((error) => {
          setErrorMessage(
            `I'm sorry, there was an issue sending your message: ${error}. You can email me at sarah.n.jensen@gmail.com.`
          );
        });
      };

      function resetFormFields(setState) {
        setState((otherValues) => ({
          ...otherValues,
          value: '',
        }));
      }
        
  return (
    <Container maxWidth='sm'>
      <Grid
        container
        className={classes.root}
        direction='column'
        alignItems='center'
      >
        <Typography
          variant='h4'
          justifySelf='center'
          style={{
            color: '#122c49',
            fontWeight: 'bold',
          }}
        >
          Contact Me
        </Typography>
        <form className={classes.root}>
          <TextField
            required
            id='outlined-required'
            name='name'
            value={name}
            label='Name'
            variant='outlined'
            autoFocus='true'
            type='text'
            fullWidth
            className={classes.input}
            onChange={(e) => handleInputChange(e.target.value, setName)}
            onBlur={(e) => handleBlur(e.target.value, setName)}
            onFocus={() => handleFocus(name, setName)}
            error={name.isEmpty}
            helperText={name.isEmpty && 'Please enter your name'}
          />

          <TextField
            required
            id='outlined-required'
            name='email'
            value={email}
            label='Email address'
            variant='outlined'
            type='email'
            fullWidth
            className={classes.input}
            onChange={(e) => handleInputChange(e.target.value, setEmail)}
            onBlur={(e) => handleBlur(e.target.value, setEmail)}
            onFocus={() => handleFocus(email, setEmail)}
            error={email.isEmpty || !email.isValid}
            helperText={
              (email.isEmpty && 'Please enter your email address') ||
              (!email.isValid && 'Please enter a valid email address')
            }
          />

          <TextField
            required
            id='outlined-multiline-static'
            name='message'
            value={message}
            label='Message'
            multiline
            minRows={4}
            variant='outlined'
            type='text'
            fullWidth
            className={classes.inputMessage}
            onChange={(e) => handleInputChange(e.target.value, setMessage)}
            onBlur={(e) => handleBlur(e.target.value, setMessage)}
            onFocus={() => handleFocus(message, setMessage)}
            error={message.isEmpty}
            helperText={message.isEmpty && 'Please enter a message'}
          />
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <Button
            variant='contained'
            size='large'
            alignSelf='center'
            className={classes.button}
            onClick={(e) => sendEmail}
          >
            Send Message
          </Button>
          {submitted && <p>Thank you for your message!</p>}
          {errorMessage && (
          <Typography className='error'>{errorMessage}</Typography>
        )}
        </form>
      </Grid>
    </Container>
  );
};

export default Contact;
