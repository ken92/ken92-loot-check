import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deposit, withdraw} from '../actions/balance';

export class Wallet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: undefined
		};
	}

	updateBalance = event => {
		const newBalance = parseInt(event.target.value, 10);
		this.setState({
			balance: isNaN(newBalance)? 0 : newBalance
		});
	}

	deposit = () => {
		this.props.deposit(this.state.balance);
		this.emptyWalletInput();
	}
	withdraw = () => {
		this.props.withdraw(this.state.balance);
		this.emptyWalletInput();
	}

	emptyWalletInput = () => {
		this.setState({balance: ''});
	}

	render() {
		return (
			<div>
				<h3 className="balance">Wallet balance: {this.props.balance}</h3>
				<br />
				<input className="input-wallet" onChange={this.updateBalance} value={this.state.balance} />
				<button className="btn-deposit" onClick={this.deposit}>Deposit</button>
				<button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		balance: state.balance,
		bitcoin: state.bitcoin
	};
};

const mapDispatchToProps = {
	deposit,
	withdraw
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
