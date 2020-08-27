import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import StaticProfile from "../components/StaticProfile";
import NoImg from "../images/no-img.png";

// MUI
import Paper from "@material-ui/core/Paper";
// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import CalendarToday from "@material-ui/icons/CalendarToday";

import { connect } from "react-redux";
import { getUniData } from "../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadIt,
  handle: {
    height: 20,
    backgroundColor: theme.palette.primary.main,
    width: 60,
    margin: "0 auto 7px auto",
  },
  fullLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    marginBottom: 10,
  },
  fullLi: {
    height: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    marginBottom: 10,
  },
  halfLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "50%",
    marginBottom: 10,
  },
  halfLi: {
    height: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "50%",
    marginBottom: 10,
  },
  content: {
    margin: "15px auto 0px",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    marginBottom: 20,
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
    padding: 20,
  },
});

class university extends Component {
  state = {
    uniInfo: null,
  };
  componentDidMount() {
    const uniId = this.props.match.params.uniId;
    this.props.getUniData(uniId);
    axios
      .get(`/university/${uniId}`)
      .then((res) => {
        this.setState({
          uniInfo: res.data.university,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { users, loading } = this.props.data;
    const { classes } = this.props;
    return (
      <Grid container spacing={1} style={{ padding: 24 }}>
        <Grid item sm={12} xs={12}>
          {this.state.uniInfo === null ? (
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div className={classes.fullLi} />
                <div className={classes.halfLi} />
              </CardContent>
            </Card>
          ) : (
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="body1" className={classes.content}>
                  Here are all the users that have attended{" "}
                  {this.state.uniInfo.uniName}, {this.state.uniInfo.countryName}
                  ! Click on them to views their reviews or contact them
                  directly via their emails!
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
        {!loading ? (
          <Grid container spacing={1} style={{ padding: 24 }}>
            {users.map((user) => (
              <Grid
                item
                style={{ padding: 12 }}
                xs={12}
                sm={6}
                lg={4}
                xl={3}
                key={user.handle}
              >
                <StaticProfile key={user.handle} profile={user} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={1} style={{ padding: 24 }}>
            {Array.from({ length: 6 }).map((item, index) => (
              <Grid
                item
                style={{ padding: 12 }}
                xs={12}
                sm={6}
                lg={4}
                xl={3}
                key={index}
              >
                <Paper className={classes.paper}>
                  <div className={classes.profile}>
                    <div className="image-wrapper">
                      <img
                        src={NoImg}
                        alt="profile"
                        className="profile-image"
                      />
                    </div>
                    <hr />
                    <div className="profile-details">
                      <div className={classes.handle} />
                      <hr />
                      <div className={classes.fullLine} />
                      <div className={classes.fullLine} />
                      <hr />
                      <LocationOn color="primary" /> <span>Location</span>
                      <hr />
                      <CalendarToday color="primary" /> Joined date
                    </div>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    );
  }
}

university.propTypes = {
  getUniData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUniData })(
  withStyles(styles)(university)
);
