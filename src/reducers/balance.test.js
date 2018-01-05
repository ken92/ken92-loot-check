import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balance reducer', () => {
	describe('when initializing', () => {
		const balance = 10;
		it('sets a balance', () => {
			const action = {type: constants.SET_BALANCE, balance};
			expect(balanceReducer(undefined, action)).toEqual(balance);
		});

		describe('then re-initializing', () => {
			it('reads the balance from cookies', () => {
				expect(balanceReducer2(undefined, {})).toEqual(balance);
			});
		});
	});

	it('handles a deposit', () => {
		const deposit = 10;
		const initialBalance = 5;
		const action = {type: constants.DEPOSIT, deposit};
		expect(balanceReducer(initialBalance, action)).toEqual(initialBalance + deposit);
	});

	it('handles a withdrawal', () => {
		const withdraw = 5;
		const initialBalance = 10;
		const action = {type: constants.WITHDRAW, withdraw};
		expect(balanceReducer(initialBalance, action)).toEqual(initialBalance - withdraw);
	});
});
