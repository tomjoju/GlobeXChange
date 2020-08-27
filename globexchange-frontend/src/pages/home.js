import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Country from "../components/Country";
import HomeSkeleton from "../util/HomeSkeleton";

import { connect } from "react-redux";
import { getCountries } from "../redux/actions/dataActions";

class home extends Component {
  componentDidMount() {
    this.props.getCountries();
  }
  render() {
    const { countries, loading } = this.props.data;
    return (
      <div>
        {!loading ? (
          <div>
            <Grid container spacing={1} style={{ padding: 24 }}>
              {countries.map((currentCountry) => (
                <Grid
                  item
                  style={{ padding: 12 }}
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={3}
                  key={currentCountry.countryId}
                >
                  <Country
                    key={currentCountry.countryId}
                    country={currentCountry}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <HomeSkeleton />
        )}
      </div>
    );
  }
}

home.propTypes = {
  getCountries: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getCountries })(home);
