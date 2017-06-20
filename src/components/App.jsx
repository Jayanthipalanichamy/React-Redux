"use strict";
import React, { Component } from "react";
import Message from "./Message.jsx";

export default class App extends Component {

    render() {
        return(<div className="heading">
            <Message message="React"/>
            <Message message="Component"/>
            <Message message="Virtual-Dom"/>
        </div>);
    }
}