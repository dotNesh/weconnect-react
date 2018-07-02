import reducers from '../reducers';

test('Business registration', () => {
  let state;
  state = reducers({
    user: { isAuthenticated: true },
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  }, { type: 'ADD_BUSINESS', message: 'Kaimati. Business successfully registered by nina' });
  expect(state).toEqual({
    user: { isAuthenticated: true },
    businesses: {
      state: {
        business: [], businesses: [], page: [], message: [], reviews: []
      },
      message: 'Kaimati. Business successfully registered by nina'
    }
  });
});
