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


// class Login extends Component {
//     // Setting the component's initial state
//     state = {
//         password: "",
//         email: "",
//         name: ""
//     };

//     handleInputChange = event => {
//         // Getting the value and name of the input which triggered the change
//         let value = event.target.value;
//         const name = event.target.name;


//         // Updating the input's state
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {

//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         event.preventDefault();
//         console.log(this.state)


//         // axios call or create all the API call in a utils folder call to create the user in the db
//         axios.post("/api/login", this.state).then(result => {
//             console.log(result);
//             this.setState({ name: result.data.firstName + " " + result.data.lastName })
//             //  this.setState({
//             //     password: "",
//             //     email: ""
//             // });
//         })
//     };
//     render() {
//         // Notice how each input has a `value`, `name`, and `onChange` prop
//         return (
//             <div>
//                 {!this.state.name ? (
//                     <form className="form">

//                         <input
//                             value={this.state.email}
//                             name="email"
//                             onChange={this.handleInputChange}
//                             type="email"
//                             placeholder="Email"
//                         />
//                         <input
//                             value={this.state.password}
//                             name="password"
//                             onChange={this.handleInputChange}
//                             type="password"
//                             placeholder="Password"
//                         />

//                         <button onClick={this.handleFormSubmit}>Submit</button>
//                     </form>
//                 ) : (<h1> Welcome {this.state.name}</h1>)
//                 }
//             </div>
//         );
//     }
// }

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form >
            </div >
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container >
    );
}

export default Login;
