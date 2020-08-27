import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import DeleteReview from "./DeleteReview";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import LocationOn from "@material-ui/icons/LocationOn";

import { connect } from "react-redux";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};

class Review extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      review: {
        body,
        createdAt,
        userImage,
        userHandle,
        reviewId,
        placeName,
        countryId,
        country,
        city,
        rating,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;
    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteReview reviewId={reviewId} countryId={countryId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="h6" fontWeight="fontWeightBold">
            {placeName}
          </Typography>
          <Rating name="rating" value={rating} readOnly />
          <hr />
          <Typography variant="body1">{body}</Typography>
          <hr />
          <Fragment>
            <LocationOn color="primary" />{" "}
            <span>
              <Typography variant="inherit" color="primary">
                {city}, {country}
              </Typography>
            </span>
          </Fragment>
        </CardContent>
      </Card>
    );
  }
}

Review.propTypes = {
  user: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Review));
