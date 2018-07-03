import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../components/Hero'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// describe what we are testing
describe('login page test', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<Hero/>).find('div.hero-image').exists()).toBe(true)
 })
})