import App from "./../src/components/App";
import React from "react";
import { assert, expect } from "chai";
import { mount } from "enzyme";

//Shallow Rendering using Enzyme
describe("App", () => {
    it("should have a heading", () => {
        const wrapper = mount(<App />);
        const inputElement = wrapper.find("input");
        expect(inputElement).to.have.length(1);
        wrapper.ref('inputMessage').get(0).value = 'Hello';
        inputElement.simulate("keyUp", { "keyCode": 13 });
        expect(wrapper.state().messages).to.deep.equal(['Hello']);
    });
});
