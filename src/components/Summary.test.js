import React from 'react';
import Summary from "./Summary";
import renderer from 'react-test-renderer';

it("renderes correctly Summary component", () => {
    const renderSummary = jest.fn();
    const tree = renderer.
    create(<Summary>
        {renderSummary()}
    </Summary>).toJSON();

    expect(tree).toMatchSnapshot();
});