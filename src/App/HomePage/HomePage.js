import React, { Component } from "react";
import { connect } from "react-redux";
export class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
