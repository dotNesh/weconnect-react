import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '../components/LoginForm/LoginForm';


describe('LoginFormInput test', () => {
  it('LoginFormInput should match snapshot', () => {
    const component = renderer.create(<LoginForm
      onSave={() => {}}
    />,);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
