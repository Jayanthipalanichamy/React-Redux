"use strict";
import Message from "./../src/components/Message";
import ShallowRenderer  from "react-test-renderer/shallow";
import TestUtils from "react-addons-test-utils";
import React from "react";
import { assert, expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";

//Shallow Rendering using Enzyme
describe("Message", () => {

    it("should have a heading", () => {
        const wrapper = shallow(<Message message="hi" />);
        const heading = wrapper.node.props.children;

        assert.equal(wrapper.node.type, "div");
        assert.equal(wrapper.node.props.className, "message");
        assert.equal(heading.type, "h1");
        assert.equal(heading.props.children[0], "hi");

        expect(wrapper.find(".message")).to.have.length(1)
    });

    it("simulate click events", () => {
        const deleteClick = sinon.spy();
        const wrapper = shallow(<Message message="hi" deleteMessage={deleteClick}/>);
        wrapper.find('h1').simulate('click');
        expect(deleteClick.calledOnce).to.equal(true);
    });

});

//Shallow Rendering
describe("Message", () => {
    it("should have h1 tag", () => {
        let renderer = new ShallowRenderer();
        renderer.render(<Message message="hi" />);
        let wrapper = renderer.getRenderOutput();

        assert(wrapper.type, "div");
        assert.equal(wrapper.props.children.type, "h1");
    });
});


//Full Rendering
describe("message", () => {
    it("should have h1 tag", () => {
        let renderer = TestUtils.renderIntoDocument(<Message message="hi"/>);
        let wrapper = TestUtils.findRenderedDOMComponentWithTag(renderer, "h1");
        assert.isDefined(wrapper);
    });
});