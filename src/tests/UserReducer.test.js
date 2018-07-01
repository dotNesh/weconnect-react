import reducer from '../reducers/user';
import * as types from '../actions/types';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ message: "", registering: false });
  });

  it('should handle LOGIN_USER', () => {
    expect(reducer([], {
      type: types.LOGIN_USER,
      message: "User Logged in successfully",
    })).toEqual([{
      message: "User Logged in successfully",
    }]);
  });
});
