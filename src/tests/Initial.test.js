import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({
    user: { isAuthenticated: false },
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  });
});
