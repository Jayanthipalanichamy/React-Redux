import App from "./../src/components/App";
import Message from "./../src/components/Message";
import React from "react";
import { assert, expect } from "chai";
import { mount } from "enzyme";

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
});
