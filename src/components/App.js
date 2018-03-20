import React, { Component } from 'react';
import Wallet from '../containers/Wallet';
import Loot from '../containers/Loot';

export default class App extends Component {
	render() {
		return (
			<div>
				<h2>Loot Check</h2>
				<hr />
				<Wallet />
				<hr/>
				<Loot />
			</div>
		)
	}
}