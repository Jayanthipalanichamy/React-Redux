"use strict";
import React, { Component } from "react";
import Message from "./Message.jsx";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            "message":""
        }

    }


    displayMessage(event) {
        if(event.keyCode === 13) {
            const inputValue = this.refs.inputMessage.value;
            this.setState({"message": inputValue });
            this.refs.inputMessage.value= "";
        }
    }


    render() {
        return(<div className="heading">
            <input ref="inputMessage" onKeyUp={(event) => {this.displayMessage(event)}}/>
            <Message message={this.state.message}/>
        </div>);
    }
}