import React from 'react';
import Pricing from "./Pricing";
import renderer from 'react-test-renderer';

const pricing = {
    subtotal : 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
};


it("renderes correctly Pricing component", () => {
    const tree = renderer.
    create(<Pricing {...pricing}/>).toJSON();

    expect(tree).toMatchSnapshot();
});