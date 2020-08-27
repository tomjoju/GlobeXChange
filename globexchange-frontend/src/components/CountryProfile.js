import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = {
  content: {
    padding: 3,
    objectFit: "cover",
    margin: "5px 10px",
  },
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 10,
  },
  image: {
    minWidth: 300,
    maxHeight: 260,
  },
};

const CountryProfile = (props) => {
  dayjs.extend(relativeTime);
  const {
    classes,
    countryUniversities,
    profile: { countryName, countryImage, countryLink, countryUpdateDate },
  } = props;
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardMedia
          image={countryImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography variant="h4" className={classes.content}>
            {countryName}
          </Typography>
          <Typography variant="body1" className={classes.content}>
            Visit this{" "}
            <a href={countryLink} target="_blank" rel="noopener noreferrer">
              link
            </a>{" "}
            for information on travel requirements.
          </Typography>
          {countryUniversities.length !== 1 ? (
            <Typography variant="body1" className={classes.content}>
              {countryName} has {countryUniversities.length} universities that
              have exchange programs with NUS. The universities are listed
              below.
            </Typography>
          ) : (
            <Typography variant="body1" className={classes.content}>
              {countryName} has {countryUniversities.length} university that has
              exchange programs with NUS. The university is listed below.
            </Typography>
          )}
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.content}
          >
            The information is valid as of {dayjs(countryUpdateDate).fromNow()}.
          </Typography>
          <Typography variant="body1" className={classes.content}>
            Here are some suggested places to visit during your stay:
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

CountryProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryProfile);
