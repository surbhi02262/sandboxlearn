import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Helmet from "react-helmet";

class Header extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };

  render() {
    const { headerTitle, appName, isLoggedIn } = this.props;
    return (
      <div className="header">
        <AppBar position="sticky">
          <Helmet>
            <title>
              {appName} | {headerTitle}
            </title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <Toolbar style={{ display: "flex" }}>
            <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
              <Link to="/">{appName} </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.header.title,
  appName: state.header.appName,
  isLoggedIn: state.header.user.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
