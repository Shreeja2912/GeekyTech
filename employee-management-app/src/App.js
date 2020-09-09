import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import { fetchDataThunk } from "./actions/thunkActions";
import { handlerClicked, handlerClickedDetails } from "./actions/sagaActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import MUICard from "@material-ui/core/Card";
import MUICardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { Tooltip } from "@material-ui/core";
import Info from "@material-ui/icons/Info";

// const height_inner = window.innerHeight;
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    // minHeight: `${height_inner}`,
    backgroundColor: "#aecad6", //"#7fcec5",
    backgroundImage: "linear-gradient(315deg, #aecad6 0%, #b8d3fe 74%)", //" linear-gradient(315deg, #7fcec5 0%, #14557b 74%)",
    //backgroundColor: "#eec0c6",
    // backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
    padding: "1vw",
  },
  title: {
    flexGrow: 1,
  },
  spinnerRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  nullRoot: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "40vw",
    paddingTop: "35vh",
  },
  card: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "white",

    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#0cbaba", // "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 95%)",
    boxShadow: "0 0 10px rgba(0,0,0,.5)",
    transition: "all .5s",
    "&:hover": {
      boxShadow: " 0 8px 8px rgba(0,0,0,.25)",
      margin: "5px",
    },
  },
  Detailscard: {
    borderRadius: 12,
    height: "inherit",
    width: "inherit",
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "white",

    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#0cbaba", // "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 95%)",
    boxShadow: "0 0 10px rgba(0,0,0,.5)",
  },
  avatar: {
    width: "inherit",
    height: "inherit",
  },
  avatarDetails: {
    width: 80,
    height: 80,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
    color: "white",
  },
  subheader: {
    fontSize: 18,
    color: "#c7c7c7",
    marginTop: 8,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  nullMsg: {
    fontSize: 20,
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  clickMsg: {
    fontSize: 20,
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    marginLeft: -60,
  },
  fetchTypo: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#FFF",
  },
  fetchTypoInput: {
    height: "inherit",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "grey",
  },
  buttonFetch: {
    height: "inherit",
    backgroundColor: "#380036",
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: "transparent",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
  paperNull: {
    position: "absolute",
    width: theme.spacing.unit * 40,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
  toolTip: {
    maxWidth: "23vw",
  },
});
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class App extends Component {
  state = {
    open: false,
    searchTerm: "",
  };

  componentDidMount() {
    this.props.startFetchBySaga();
  }

  handleFetchDetailsBySaga = (id) => {
    console.log(id);

    this.setState({
      open: true,
    });

    this.props.startDetailsBySaga(id);
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  editSearchTerm = (e) => {
    console.log("ok");
    this.setState({ searchTerm: e.target.value });
  };

  dynamicSearch = () => {
    // console.log(this.props.employees[0]?.login);
    return this.props.employees.filter((name) =>
      name.login.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    //   ret = name;
    // } else ret = null;
    // return ret;
  };

  LoadingSpinner = ({ classes }) => (
    <div className={classes.spinnerRoot}>
      <CircularProgress color="primary" />
    </div>
  );

  EmployeeCard = ({ classes, id, login, type, repos_url, avatar_url }) => (
    <MUICard
      className={classes.card}
      onClick={() => this.handleFetchDetailsBySaga(login)}
    >
      <MUICardContent>
        <Avatar className={classes.avatar} src={avatar_url} />
        <Tooltip title={`User Name: ${login}`} className={classes.toolTip}>
          <Typography variant="h6" className={classes.heading}>
            {login}
          </Typography>
        </Tooltip>
      </MUICardContent>
    </MUICard>
  );

  DetailsCard = ({
    classes,
    name,
    bio,
    location,
    following,
    followers,
    avatar_url,
    public_repos,
    public_gists,
  }) => (
    <MUICard className={classes.Detailscard} onClick={this.handleClose}>
      <MUICardContent>
        <Box
        // style={{
        //   border: "solid",
        //   borderRadius: 12,
        //   color: "#0000A0",
        // }}
        >
          <MUICardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                className={classes.avatarDetails}
                src={avatar_url}
              ></Avatar>
              <Typography style={{ padding: "2vh", opacity: 0 }}>|</Typography>
              <div>
                <h3 className={classes.heading}>
                  {bio ? { name } : "Anonymous"}
                </h3>
                <div>
                  {bio ? (
                    <Typography className={classes.subheader}>{bio}</Typography>
                  ) : null}
                  {location ? (
                    <Typography className={classes.subheader}>
                      From {location}
                    </Typography>
                  ) : null}
                </div>
              </div>
            </div>
          </MUICardContent>
          <Divider light />
          <Box display={"flex"}>
            <Box p={2} flex={"auto"}>
              <p className={classes.subheader}>Followers</p>
              <p className={classes.heading}>{followers}</p>
            </Box>
            <Box p={2} flex={"auto"}>
              <p className={classes.subheader}>Following</p>
              <p className={classes.heading}>{following}</p>
            </Box>
            <Box p={2} flex={"auto"}>
              <p className={classes.subheader}>Repos</p>
              <p className={classes.heading}>{public_repos}</p>
            </Box>
            <Box p={2} flex={"auto"}>
              <p className={classes.subheader}>Gists</p>
              <p className={classes.heading}>{public_gists}</p>
            </Box>
          </Box>
        </Box>
      </MUICardContent>
    </MUICard>
  );

  Emptycard = ({ classes }) => (
    <MUICard className={classes.card} onClick={this.handleClose}>
      >
      <MUICardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Info />
          <Typography className={classes.nullMsg}>
            Name Not found in the list...
          </Typography>
        </div>
      </MUICardContent>
    </MUICard>
  );

  render() {
    const { status, classes } = this.props;
    const { employees } = this.props;
    const { details } = this.props;
    const getData = (employ) => {
      console.log("hi", employ);
      if (employ.length === 0) {
        console.log("lol", employ);
        return (
          <div className={classes.nullRoot}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Info />
              <Typography className={classes.nullMsg}>
                Name Not found in the list...
              </Typography>
            </div>
            <Typography className={classes.clickMsg}>
              No worries please type the name and click on fetch button
            </Typography>
          </div>
        );
      } else {
        return employ?.map((employee, i) => (
          <Grid item xs={12} sm={12} md={4} lg={3} key={i}>
            <this.EmployeeCard classes={classes} {...employee} />
          </Grid>
        ));
      }
    };

    return (
      <>
        <div className={classes.root}>
          <AppBar position="fixed">
            {
              //style={{ alignItems: "center" }}>
            }
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                ALL USERS
              </Typography>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  height: "5vh",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  value={this.state.searchTerm}
                  onChange={this.editSearchTerm}
                  className={classes.fetchTypoInput}
                  placeholder="Type the name..."
                />
                <Button
                  className={classes.buttonFetch}
                  variant="contained"
                  onClick={() =>
                    this.handleFetchDetailsBySaga(
                      this.state.searchTerm.toLowerCase()
                    )
                  }
                >
                  <Typography className={classes.fetchTypo}>Fetch</Typography>
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          {status === "loading" ? (
            <this.LoadingSpinner classes={classes}></this.LoadingSpinner>
          ) : (
            <Grid container spacing={2} style={{ marginTop: 40 }}>
              {this.dynamicSearch()
                ? getData(this.dynamicSearch())
                : getData(employees)}
            </Grid>
          )}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            {this.props.statusDetails === "loading" ? (
              <this.LoadingSpinner classes={classes}></this.LoadingSpinner>
            ) : this.props.details?.length !== 0 ? (
              <div style={getModalStyle()} className={classes.paper}>
                <this.DetailsCard classes={classes} {...this.props.details} />
              </div>
            ) : (
              <div style={getModalStyle()} className={classes.paperNull}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <Info />
                  <Typography className={classes.nullMsg}>
                    No data available
                  </Typography>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.employeeReducer.status,
  employees: state.employeeReducer.data,
  details: state.DetailsReducer.data,
  statusDetails: state.DetailsReducer.status,
});

const mapDispatchToProps = (dispatch) => ({
  // startFetchByThunk: () => dispatch(fetchDataThunk()),
  startFetchBySaga: () => dispatch(handlerClicked()),
  startDetailsBySaga: (login) => dispatch(handlerClickedDetails(login)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));
