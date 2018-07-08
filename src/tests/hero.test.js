import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hero from '../components/Hero';

Enzyme.configure({ adapter: new Adapter() });
// describe what we are testing
describe('Hero component test', () => {
  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<Hero/>).find('div.hero-image').exists()).toBe(true);
  });
});
