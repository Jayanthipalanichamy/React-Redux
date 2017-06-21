"use strict";
import React, { Component } from "react";
import Message from "./Message.jsx";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            "messages":[]
        }

    }


    addMessage(event) {
        if(event.keyCode === 13) {
            const inputValue = this.refs.inputMessage.value;
            this.setState({"messages": this.state.messages.concat([inputValue]) });
            this.refs.inputMessage.value= "";
        }
    }


    render() {
        return(<div className="heading">
            <input ref="inputMessage" onKeyUp={(event) => {this.addMessage(event)}}/>
            {this.displayMessages()}
        </div>);
    }

    displayMessages() {
        return ((this.state.messages).map((message, index)=> {
            return <Message message={message} key={index} deleteMessage={() => {this.deleteMessage(message)}}/>
        }));
    }

    deleteMessage(message) {
        let messages = (this.state.messages);
        let index = messages.indexOf(message);
        if(index>-1) {
            messages.splice(index, 1);
            this.setState({"messages": messages});
        }
    }

}