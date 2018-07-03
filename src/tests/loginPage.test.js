import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginPage from '../components/LoginPage'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// describe what we are testing
describe('login page test', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<LoginPage />).find('div.container').exists()).toBe(true);
 })
})