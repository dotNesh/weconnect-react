import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({
    user: { isAuthenticated: false },
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  }, { type: 'REGISTER_USER', message: 'Account successfully registered. Log In to access.', isAuthenticated: false });
  expect(state).toEqual({
    user: [{ isAuthenticated: false }, { message: 'Account successfully registered. Log In to access.' }],
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  });
});
