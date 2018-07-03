import reducers from '../reducers';

test('user login', () => {
  let state;
  state = reducers({
    user: [{ isAuthenticated: true }, { message: 'Logout successful' }],
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  }, { type: 'LOGIN_USER', message: 'Welcome, Log In Succesful!' });
  expect(state).toEqual({
    user: [[{ isAuthenticated: true }, { message: 'Logout successful' }], { message: 'Welcome, Log In Succesful!' }],
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  });
});
