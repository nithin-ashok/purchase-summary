import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {pricing: {total: 140}, itemDetails:{}, loading:false, loadPurchaseSummary: jest.fn()};

  ReactDOM.render(<App  {...props}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
