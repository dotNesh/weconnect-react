import reducers from '../reducers';

test('Get business reducer', () => {
  let state;
  state = reducers({
    user: { isAuthenticated: true },
    businesses: {
      state: {
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
          business_id: 4, business_name: 'WaJamo', category: 'Retail', description: 'Best of the Best', location: 'Nairobi'
        }],
        page: 1,
        ppage: 0,
        npage: 2
      },
      business: {
        'Business name': 'Qwetu', "Business_id": 5, "Category": 'Housing', 'Created By': 'nina', "Description": 'Home away from home', "Location": 'Thika'
      }
    }
  }, {
    type: 'GET_BUSINESS',
    payloads: {
      'Business name': 'Qwetu', "Business_id": 5, "Category": 'Housing', 'Created By': 'nina', "Description": 'Home away from home', "Location": 'Thika'
    }
  });
  expect(state).toEqual({
    user: { isAuthenticated: true },
    businesses: {
      state: {
        state: {
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
            business_id: 4, business_name: 'WaJamo', category: 'Retail', description: 'Best of the Best', location: 'Nairobi'
          }],
          page: 1,
          ppage: 0,
          npage: 2
        },
        business: {
          'Business name': 'Qwetu', "Business_id": 5, "Category": 'Housing', 'Created By': 'nina', "Description": 'Home away from home', "Location": 'Thika'
        }
      },
      business: {
        'Business name': 'Qwetu', "Business_id": 5, "Category": 'Housing', 'Created By': 'nina', "Description": 'Home away from home', "Location": 'Thika'
      },
      businesses: []
    }
  });
});
