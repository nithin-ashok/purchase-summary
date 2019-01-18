import React from 'react';
import PromoCode from "./PromoCode";
import renderer from 'react-test-renderer';

it("renderes correctly PromoCode component", () => {
    const tree = renderer.
    create(<PromoCode />).toJSON();

    expect(tree).toMatchSnapshot();
});
