import React, { Component } from 'react';
import Wallet from '../containers/Wallet';

export default class App extends Component {
	render() {
		return (
			<div>
				<h2>Loot Check</h2>
				<hr />
				<Wallet />
			</div>
		)
	}
}