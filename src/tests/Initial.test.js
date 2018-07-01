import reducers from '../reducers';

test('initial state test', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    user: { isAuthenticated: false },
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  });
});
