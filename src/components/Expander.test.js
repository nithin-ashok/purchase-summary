import React from 'react';
import Expander from "./Expander";
import renderer from 'react-test-renderer';

it("renderes correctly", () => {
    const tree = renderer.
        create(<Expander><span>Item Details</span></Expander>).toJSON();

    expect(tree).toMatchSnapshot();
});