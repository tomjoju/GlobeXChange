import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
  },
};

class Country extends Component {
  render() {
    const {
      country: { countryName, countryId, countryImage },
    } = this.props;
    return (
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={countryImage}
          title="Image"
        />
        <CardContent>
          <Typography
            variant="h5"
            component={Link}
            to={`/country/${countryId}`}
            color="primary"
          >
            {countryName}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Country);
