import React from 'react';
import Total from "./Total";
import renderer from 'react-test-renderer';

it("renderes correctly Total component", () => {
    let total = 100;
    const tree = renderer.
    create(<Total total={total} />).toJSON();

    expect(tree).toMatchSnapshot();
});