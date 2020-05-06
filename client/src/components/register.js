import React, { Component } from "react";
import axios from "axios";
import React, { Component } from "react";
import axios from "axios";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./style.css"

// class Register extends Component {
//     // Setting the component's initial state
//     state = {
//         firstName: "",
//         lastName: "",
//         password: "",
//         email: ""
//     };

//     handleInputChange = event => {
//         // Getting the value and name of the input which triggered the change
//         let value = event.target.value;
//         const name = event.target.name;

//         if (name === "password") {
//             value = value.substring(0, 15);
//         }
//         // Updating the input's state
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {

//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         event.preventDefault();
//         console.log(this.state)
//         if (!this.state.firstName || !this.state.lastName) {
//             alert("Fill out your first and last name please!");
//         } else if (this.state.password.length < 6) {
//             alert(
//                 `Choose a more secure password ${this.state.firstName} ${this.state
//                     .lastName}`
//             );
//         } else {
//             alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//         }

//         // axios call or create all the API call in a utils folder call to create the user in the db
//         axios.post("/api/signup", this.state).then(result => {
//             console.log(result); this.setState({
//                 firstName: "",
//                 lastName: "",
//                 password: "",
//                 email: ""
//             });
//         })
//     };

//     render() {
//         // Notice how each input has a `value`, `name`, and `onChange` prop
//         return (
//             <div>
//                 <p>
//                     Hello {this.state.firstName} {this.state.lastName}
//                 </p>
//                 <form className="form">
//                     <input
//                         value={this.state.firstName}
//                         name="firstName"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="First Name"
//                     />
//                     <input
//                         value={this.state.lastName}
//                         name="lastName"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Last Name"
//                     />
//                     <input
//                         value={this.state.email}
//                         name="email"
//                         onChange={this.handleInputChange}
//                         type="email"
//                         placeholder="Email"
//                     />
//                     <input
//                         value={this.state.password}
//                         name="password"
//                         onChange={this.handleInputChange}
//                         type="password"
//                         placeholder="Password"
//                     />

//                     <button onClick={this.handleFormSubmit}>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
          </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email." */}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
            </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Register;
