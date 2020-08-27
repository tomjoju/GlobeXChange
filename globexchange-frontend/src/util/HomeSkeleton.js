import React from "react";
import PropTypes from "prop-types";
import empty from "../images/empty.png";

// MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  halfLine: {
    height: 15,
    width: "30%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: 10,
  },
});

const HomeSkeleton = (props) => {
  const { classes } = props;
  return (
    <div>
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
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image={empty}
                title="Image"
              />
              <CardContent>
                <div className={classes.halfLine} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

HomeSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeSkeleton);
