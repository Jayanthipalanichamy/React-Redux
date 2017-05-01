"use strict";
import App from "./../src/components/App";
import React from "react";
import { assert } from "chai";
import { shallow } from "enzyme";

describe("App", () => {
    it("should have a heading", () => {
        const appDom = shallow(<App />);
        const heading = appDom.node.props.children;

        assert.equal(appDom.node.type, "div");
        assert.equal(appDom.node.props.className, "heading");
        assert.equal(heading.props.children, "Hello World");
    });
});
