import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Review from "../components/Review";
import StaticProfile from "../components/StaticProfile";
import ReviewSkeleton from "../util/ReviewSkeleton";
import ProfileSkeleton from "../util/ProfileSkeleton";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    userProfile: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          userProfile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { reviews, loading } = this.props.data;

    const userReviewsMarkup = loading ? (
      <ReviewSkeleton />
    ) : reviews === null ? (
      <p>No reviews from this user</p>
    ) : (
      reviews.map((review) => <Review key={review.reviewId} review={review} />)
    );

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {userReviewsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.userProfile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.userProfile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(user);
