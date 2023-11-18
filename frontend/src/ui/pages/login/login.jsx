import React, { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import withStyles from "./style/loginStyle";
import InputText from "./components/loginInputText";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { request, setAuthHeader, setUser } from "../../../helpers/axios_helper";

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      snackbarOpen: false,
      snackbarMessage: "",
      snackbarSeverity: "success",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ snackbarOpen: false });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.login(e);
  };

  login = (e) => {
    console.log("login");
    console.log("before:" + this.state);
    e.preventDefault();
    request("POST", "/login", {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response.data.token);
        setAuthHeader(response.data.token);
        setUser(JSON.stringify(response.data));
        const uid = response.data.id;
        console.log(uid);
        this.setState(
          {
            snackbarOpen: true,
            isLoading: false,
            snackbarMessage: "Logged in successfully!!",
            snackbarSeverity: "success",
          },
          () => {
            window.location.href = "/home/" + uid;
          }
        );
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setAuthHeader(null);
        this.setState({
          snackbarOpen: true,
          isLoading: false,
          snackbarMessage: error.response.data.message,
          snackbarSeverity: "error",
        });
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const handleSignUpClick = () => {
      window.location.href = "/register";
    };

    return (
      <Box
        className={classes.container}
        elevation={3}
        noValidate
        autoComplete="off"
      >
        <Box className={classes.loginLogo}>
          <img
            src={logo}
            alt="logo"
            sx={{ width: "150%", height: "auto" }}
          ></img>
        </Box>
        <Box className={classes.inputTextField}>
          <InputText
            className={classes.TextBoxInput}
            placeholder="Email"
            type="email"
            id="email"
            fullWidth={true}
            margin="normal"
            name="email"
            icon="email"
            onChange={this.handleChange}
          />
          <InputText
            className={classes.TextBoxInput}
            placeholder="Password"
            type="password"
            id="password"
            fullWidth={true}
            margin="normal"
            name="password"
            icon="password"
            onChange={this.handleChange}
          />
        </Box>

        <Button
          className={classes.loginButton}
          variant="contained"
          type="submit"
          onClick={this.handleSubmit}
        >
          {this.state.isLoading ? (
            <CircularProgress size={24} style={{ color: "#FFB53B" }} />
          ) : (
            "Login"
          )}
        </Button>
        <Box className={classes.BoxaccountText}>
          <Typography variant="body1">Don't have an account?</Typography>
          <Button
            className={classes.Buttontosignup}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleCloseSnackbar}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={this.handleCloseSnackbar}
            severity={this.state.snackbarSeverity}
          >
            {this.state.snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Box>
    );
  }
}

export default withStyles(Loginpage);
