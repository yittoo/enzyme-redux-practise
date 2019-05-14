import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
  }

  updateBalance = event => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    });
  };

  deposit = () => {
    this.props.deposit(this.state.balance);
    this.setState({ balance: 0 });
  };

  withdraw = () => {
    this.props.withdraw(this.state.balance);
    this.setState({ balance: 0 });
  };

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input value={this.state.balance} className="input-wallet" onChange={this.updateBalance} />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: balance => dispatch(deposit(balance)),
    withdraw: balance => dispatch(withdraw(balance))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
