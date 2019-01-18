import React from 'react';
import Horizontal from "./Horizontal";
import renderer from 'react-test-renderer';

it("renderes correctly", () => {
    const tree = renderer.
    create(<Horizontal />).toJSON();

    expect(tree).toMatchSnapshot();
});