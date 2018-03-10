import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;
    const test_action = { type: constants.SET_BALANCE, balance };

    expect(balanceReducer(undefined, test_action)).toEqual(balance);
  });

  it('deposits into balance', () => {
    const deposit = 10;
    const initalState = 5;
    const newTotal = deposit + initalState;
    const test_action = { type: constants.DEPOSIT, deposit };

    expect(balanceReducer(initalState, test_action)).toEqual(newTotal)
  });

  it('withdraws from the balance', () => {
    const withdraw = 10;
    const initalState = 20;
    const newTotal = initalState - withdraw;
    const test_action = { type: constants.WITHDRAW, withdraw };

    expect(balanceReducer(initalState, test_action)).toEqual(newTotal);
  });
});