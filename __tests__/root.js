import React from 'react';
import { shallow } from 'enzyme';
import MainApp from "../src/root";
import App from "../src/App";

describe('Root component', () => {
  let component;
  it('should contain Provider elements', () => {
    component = shallow(<MainApp />);
    const header = component.find('Provider');
    expect(header).toHaveLength(1);
  });
  it('should contain App elements', () => {
    component = shallow(<MainApp />);
    const header = component.find(App);
    expect(header).toHaveLength(1);
  });
});
