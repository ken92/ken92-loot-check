import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from '../actions/bitcoin';

export class Loot extends Component {
	componentDidMount() {
		this.props.fetchBitcoin();
	}

	computeBitcoin() {
		const {bitcoin} = this.props;
		if (Object.keys(bitcoin).length === 0) return '';

		const rateStringNoCommas = bitcoin.bpi.USD.rate.replace(',', '');
		const numberRate = parseFloat(rateStringNoCommas);

		return this.props.balance / numberRate;
	}

	render() {
		return (
			<h3>
				Bitcoin balance: {this.computeBitcoin()}
			</h3>
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
	fetchBitcoin
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
