import React from 'react';
import ItemDetails from "./ItemDetails";
import renderer from 'react-test-renderer';

const itemDetails = {
    item_name: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
    afterDisc_Price: "99.11",
    beforeDisc_Price: 102.96,
    quantity: 1,
}

it("renderes correctly ItemDetails component", () => {
    const tree = renderer.
    create(<ItemDetails {...itemDetails} />).toJSON();

    expect(tree).toMatchSnapshot();
});