"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Message extends Component {
    render() {
        return (<div>
            <h1>Hello {this.props.message}</h1>
        </div>)
    }
}

Message.propTypes = {
  "message": PropTypes.string.isRequired
};