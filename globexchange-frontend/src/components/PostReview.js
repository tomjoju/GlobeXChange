import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";
import Box from "@material-ui/core/Box";

// MUI Stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";
import Rating from "@material-ui/lab/Rating";

// Redux
import { connect } from "react-redux";
import { postReview, clearErrors } from "../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadIt,
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10,
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "90%",
    top: "0.95%",
  },
  spacing: 8,
});

class PostReview extends Component {
  state = {
    open: false,
    country: "",
    city: "",
    placeName: "",
    body: "",
    rating: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        country: "",
        city: "",
        placeName: "",
        body: "",
        rating: "",
        open: false,
        errors: {},
      });
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      country: this.props.profile.countryName,
      city: this.state.city,
      placeName: this.state.placeName,
      body: this.state.body,
      rating: this.state.rating,
    };
    this.props.postReview(this.props.countryId, newReview);
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
    } = this.props;
    return (
      <Fragment>
        <Box mb={2.5} ml={42}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
            onClick={this.handleOpen}
          >
            Post A Review
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </Box>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>Post a new review!</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="city"
                type="text"
                label="City"
                placeholder="City where your reviewed attraction is located"
                error={errors.city ? true : false}
                helperText={errors.city}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="placeName"
                type="text"
                label="Name of Place"
                placeholder="Name of attraction"
                error={errors.placeName ? true : false}
                helperText={errors.placeName}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="body"
                type="text"
                label="Body"
                multiline
                rows="6"
                placeholder="Enter review here"
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <Rating
                name="rating"
                error={errors.rating ? true : false}
                onChange={this.handleChange}
                defaultValue={0}
                max={5}
                precision={0.5}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

PostReview.propTypes = {
  UI: PropTypes.object.isRequired,
  postReview: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  countryId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postReview, clearErrors })(
  withStyles(styles)(PostReview)
);
