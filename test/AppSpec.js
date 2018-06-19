import App from "./../src/components/App";
import Message from "./../src/components/Message";
import React from "react";
import { assert, expect } from "chai";
import { shallow, mount } from "enzyme";

//Shallow Rendering using Enzyme
describe("App", () => {
    it("should update the state if we give value in input", () => {
        const wrapper = mount(<App />);
        const inputElement = wrapper.find("input");
        expect(inputElement).to.have.length(1);

        wrapper.ref('inputMessage').get(0).value = 'Hello';
        inputElement.simulate("keyUp", { "keyCode": 13 });
        expect(wrapper.state().messages).to.deep.equal(['Hello']);

        const messageComponents = wrapper.find(Message);
        expect(messageComponents).to.have.length(1);
    });

    it("should update state with input value", () => {
        const wrapper = mount(<App />);

        const heading = wrapper.find('.heading');
        const inputBox = wrapper.find('input');

        wrapper.ref('inputMessage').get(0).value = 'Hello';
        inputBox.simulate("keyUp", { "keyCode": 13 });

        expect(heading.exists()).to.be.true;
        expect(inputBox.exists()).to.be.true;
        expect(wrapper.state().messages).to.deep.equal(['Hello']);

    });

    it("should render Message Component", () => {
        const messages = ["Hello", "Wold"];
        const wrapper = mount(<App />);
        wrapper.setState({"messages":  messages});

        const messageDom = wrapper.find('Message');
        const heading = messageDom.find('h1');
        console.log(wrapper.debug());

         expect(messageDom).to.have.length(2);
         expect(heading.exists()).to.be.true;
    });

    it("should delete message when we click on delete button", () => {
        const messages = ["Hello", "Wold"];
        const wrapper = mount(<App/>);
        wrapper.setState({"messages": messages});

        const messageDom = wrapper.find('Message').at(0);
        messageDom.simulate("click");

        expect(wrapper.state().messages).to.deep.equal(['World']);
    });

});
