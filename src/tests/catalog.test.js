import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({
    user: { isAuthenticated: true },
    businesses: {
      business: [], businesses: [], page: [], message: [], reviews: []
    }
  }, {
    type: 'GET_BUSINESSES',
    payload: {
      "Businesses": [{
        business_id: 5, business_name: 'Qwetu', category: 'Housing', description: 'Home away from home', location: 'Thika'
      }, {
        business_id: 8, business_name: 'Musomi & Sons', category: '...', description: 'Software Development', location: 'Nairobi'
      }, {
        business_id: 9, business_name: 'Andela', category: 'Hotel', description: 'home', location: 'Thika'
      }, {
        business_id: 1, business_name: 'Beeefvvv', category: 'Food', description: 'Baze noma', location: 'Nairobi'
      }, {
        business_id: 6, business_name: 'Kwa Jeff', category: 'Retail', description: 'Mali safi', location: 'Nairobi'
      }, {
        business_id: 2, business_name: 'Mutura', category: 'Hotel', description: 'zsxdcfvghhjbknlm,lmknjkbhgvfcdxszasszxdfcgvhbjnkml,', location: 'juja'
      }],
      'Current Page': 1,
      'Next page': 2,
      'Previous page': 0
    },
    page: 1,
    npage: 2,
    ppage: 0
  });
  expect(state).toEqual({
    user: { isAuthenticated: true },
    businesses: {
      state: {
        business: [], businesses: [], page: [], message: [], reviews: []
      },
      businesses: [{
        business_id: 5, business_name: 'Qwetu', category: 'Housing', description: 'Home away from home', location: 'Thika'
      }, {
        business_id: 8, business_name: 'Musomi & Sons', category: '...', description: 'Software Development', location: 'Nairobi'
      }, {
        business_id: 9, business_name: 'Andela', category: 'Hotel', description: 'home', location: 'Thika'
      }, {
        business_id: 1, business_name: 'Beeefvvv', category: 'Food', description: 'Baze noma', location: 'Nairobi'
      }, {
        business_id: 6, business_name: 'Kwa Jeff', category: 'Retail', description: 'Mali safi', location: 'Nairobi'
      }, {
        business_id: 2, business_name: 'Mutura', category: 'Hotel', description: 'zsxdcfvghhjbknlm,lmknjkbhgvfcdxszasszxdfcgvhbjnkml,', location: 'juja'
      }],
      page: 1,
      ppage: 0,
      npage: 2
    }
  });
});
