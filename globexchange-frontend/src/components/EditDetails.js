import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// Redux
import { connect } from "react-redux";
import { editUserDetails } from "../redux/actions/userActions";

// MUI Stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

// Icons
import EditIcon from "@material-ui/icons/Edit";

const styles = (theme) => ({
  ...theme.spreadIt,
  button: {
    float: "right",
  },
  FormControl: {
    width: 500,
    margin: "10px auto",
  },
});

class EditDetails extends Component {
  state = {
    bio: "",
    uni: "",
    tele: "",
    ig: "",
    linkedin: "",
    open: false,
  };
  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      uni: credentials.uni ? credentials.uni : "",
      tele: credentials.tele ? credentials.tele : "",
      ig: credentials.ig ? credentials.ig : "",
      linkedin: credentials.linkedin ? credentials.linkedin : "",
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      uni: this.state.uni,
      tele: this.state.tele,
      ig: this.state.ig,
      linkedin: this.state.linkedin,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };
  render() {
    const { classes, universities } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Edit details"
          onClick={this.handleOpen}
          btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit Your Details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                type="text"
                label="Bio"
                multiline
                rows="3"
                placeholder="A short bio about yourself"
                className={classes.FormControl}
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
              <FormControl className={classes.FormControl}>
                <InputLabel id="universities">University Attended</InputLabel>
                <Select
                  labelId="universities"
                  name="uni"
                  value={this.state.uni}
                  onChange={this.handleChange}
                >
                  {universities.map((university) => (
                    <MenuItem value={university.uniName} key={university.uniId}>
                      {university.uniName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                name="tele"
                type="text"
                label="Telegram Handle"
                rows="3"
                placeholder="Eg. @jamesteo"
                className={classes.FormControl}
                value={this.state.tele}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="ig"
                type="text"
                label="Instagram Handle"
                rows="3"
                placeholder="Eg. @jamesteo"
                className={classes.FormControl}
                value={this.state.ig}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="linkedin"
                type="text"
                label="LinkedIn Profile"
                rows="3"
                placeholder="Enter a URL to your LinkedIn profile"
                className={classes.FormControl}
                value={this.state.linkedin}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetails)
);
