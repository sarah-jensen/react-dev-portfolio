import React, { useState } from "react";
//import validation function
import validateEmail from "../../utils/validateEmail";

//Material-UI imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, FormControl, Grid, TextField, Typography } from "@material-ui/core";

//page styling
const useStyles = makeStyles((form) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#9daeb3",
    color: "#283845",
    opacity: "75%",
    padding: 20,
  },
  form: {
    flexGrow: 1,
    maxWidth: "90%",
  },
  input: {
    marginBottom: form.spacing(2),
    width: "100%",
  },
  inputMessage: {
    margin: "auto",
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
        setName(value);
    } else if (name === 'email') {
        setEmail(value);
    } else if (name === 'message') {
        setMessage(value);
    }

    if (value !== '') {
        setErrorMessage('All fields are required.');
    }
};

//function to handle errors when a field is no longer in focus
const handleBlur = (e) => {
  const { value, name } = e.target;

  if (value === '') {
      if (name === 'name') {
          setErrorMessage('Name is required.');
      } else if (name === 'email') {
          setErrorMessage('Email address is required.');
      } else if (name === 'message') {
          setErrorMessage('Message is required.');
      }
  }
};

//function to handle form submission
const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
  }

  setName('');
  setEmail('');
  setMessage('');
  setSubmitted(true);
};

  return (
    <Container maxWidth="sm" >
      <Grid
        container
        className={classes.root}
        direction="column"
        alignItems="center"
      >
        <Typography
          variant="h4"
          justifySelf="center"
          style={{
            color: '#122c49',
            fontWeight: "bold",
          }}
        >
          Contact Me
        </Typography>
        <form className={classes.root}>
          <TextField
            required
            id="outlined-required"
            name="name"
            value={name}
            label="Name"
            variant="outlined"
            autoFocus="true"
            type="text"
            fullWidth
            className={classes.input}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />

          <TextField
            required
            id="outlined-required"
            name="email"
            value={email}
            label="Email address"
            variant="outlined"
            type="email"
            fullWidth
            className={classes.input}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />

          <TextField
            required
            id="outlined-multiline-static"
            name="message"
            value={message}
            label="Message"
            multiline
            minRows={4}
            variant="outlined"
            type="text"
            fullWidth
            className={classes.inputMessage}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        {errorMessage && (
                    <p className="error">{errorMessage}</p>
                )}
          <Button
          variant="contained"
          size="large"
          alignSelf="center"
          className={classes.button}
          onClick={handleFormSubmit}
          >
            Send Message
          </Button>
          {submitted && (
                    <p>Thank you for your message!</p>
                )}
        </form>
      </Grid>
    </Container>
  );
};



export default Contact;
