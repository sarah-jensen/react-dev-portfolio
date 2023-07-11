import React from 'react';
import ResumePDF from '../../assets/files/Sarah-Jensen_resume.pdf';
import { Button, Container, makeStyles } from '@material-ui/core';
import { GetApp, Done } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #0f4c5c 30%, #0a9396 90%)',
    color: '#e5e6e4',
    },
}));

export const Resume = () => {
    const classes = useStyles();
    return (
        <Container>
            <Button
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<GetApp/>}
                href={ResumePDF}
                >
            Download PDF
            </Button>

            {/* TODO: add  list of developer proficiencies*/}
        </Container>
    )
}

export default Resume;