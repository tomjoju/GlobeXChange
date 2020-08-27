import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

// MUI
import MuiLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// Icons
import SchoolIcon from "@material-ui/icons/School";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const styles = (theme) => ({
  ...theme.spreadIt,
});

const StaticProfile = (props) => {
  const {
    classes,
    profile: {
      handle,
      createdAt,
      imageUrl,
      bio,
      email,
      uni,
      tele,
      ig,
      linkedin,
    },
  } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imageUrl} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
          >
            {handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {tele && (
            <Fragment>
              <TelegramIcon color="primary" /> <span>{tele}</span>
              <hr />
            </Fragment>
          )}
          {ig && (
            <Fragment>
              <InstagramIcon color="primary" /> <span>{ig}</span>
              <hr />
            </Fragment>
          )}
          {linkedin && (
            <Fragment>
              <LinkedInIcon color="primary" /> <span>{linkedin}</span>
              <hr />
            </Fragment>
          )}
          <EmailIcon color="primary" />{" "}
          <span>
            <Typography variant="inherit" color="primary">
              {email}
            </Typography>
          </span>
          <hr />
          {uni && (
            <Fragment>
              <SchoolIcon color="primary" /> <span>{uni}</span>
              <hr />
            </Fragment>
          )}
          <CalendarToday color="primary" />{" "}
          <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
        </div>
      </div>
    </Paper>
  );
};

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaticProfile);
