import React, { Component, Fragment } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

import Review from "../components/Review";
import CountryProfile from "../components/CountryProfile";
import Profile from "../components/Profile";
import PostReview from "../components/PostReview";
import ReviewSkeleton from "../util/ReviewSkeleton";
import CountryProfileSkeleton from "../util/CountryProfileSkeleton";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { getCountry, getUniversities } from "../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadIt,
});

class country extends Component {
  state = {
    profile: null,
    countryUniversities: [],
  };
  componentDidMount() {
    this.props.getUniversities();
    const countryId = this.props.match.params.countryId;
    this.props.getCountry(countryId);
    axios
      .get(`/country/${countryId}`)
      .then((res) => {
        this.setState({
          profile: res.data.country,
        });
      })
      .catch((err) => console.log(err));
    axios
      .get(`/country/${countryId}/universities`)
      .then((res) => {
        this.setState({
          countryUniversities: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { authenticated, classes } = this.props;
    const countryId = this.props.match.params.countryId;
    const { reviews, loading, universities } = this.props.data;
    const reviewsMarkup = loading ? (
      <ReviewSkeleton />
    ) : reviews === null ? (
      <p>No reviews from this user</p>
    ) : (
      reviews.map((review) => <Review key={review.reviewId} review={review} />)
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {this.state.profile === null ? (
            <CountryProfileSkeleton />
          ) : this.state.countryUniversities.length === 0 ? (
            <CountryProfileSkeleton />
          ) : (
            <CountryProfile
              profile={this.state.profile}
              countryUniversities={this.state.countryUniversities}
            />
          )}
          {authenticated && this.state.profile !== null ? (
            <Fragment>
              <PostReview countryId={countryId} profile={this.state.profile} />
              {reviewsMarkup}
            </Fragment>
          ) : (
            <Fragment>{reviewsMarkup}</Fragment>
          )}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile universities={universities} />
          <Fragment>
            <Paper className={classes.paper}>
              <div>
                <Typography variant="h5" className={classes.unis}>
                  Universities
                </Typography>
                <hr />
                {this.state.countryUniversities.map((uni) => (
                  <li key={uni.uniId}>
                    <Typography
                      variant="body1"
                      component={Link}
                      to={`/university/${uni.uniId}`}
                      color="primary"
                      className={classes.content}
                    >
                      {uni.uniName}
                    </Typography>
                  </li>
                ))}
              </div>
            </Paper>
          </Fragment>
        </Grid>
      </Grid>
    );
  }
}

country.propTypes = {
  getCountry: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  getUniversities: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { getCountry, getUniversities })(
  withStyles(styles)(country)
);
