import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({
    user: [{ isAuthenticated: true }, { message: 'Logout successful' }],
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  }, { type: 'REGISTER_USER', isAuthenticated: false });
  expect(state).toEqual({
    user: [[{ isAuthenticated: true }, { message: 'Logout successful' }], {}],
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  });
});
