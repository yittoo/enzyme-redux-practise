import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe("balanceReducer", () => {
  describe("when initilizing", () => {
    const balance = 10;
    it("sets a balance", () => {
      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe("then re-initializing", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer(undefined, {})).toEqual(balance);
      });
    });
  });

  it("deposits into the balance", () => {
    const deposit = 10,
      initialState = 5;
    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
    ).toEqual(initialState + deposit);
  });
  it("withdraws from the balance", () => {
    const withdraw = 10,
      initialState = 20;
    expect(
      balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })
    ).toEqual(initialState - withdraw);
  });
});
