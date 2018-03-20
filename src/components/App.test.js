import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
	const app = shallow(<App />);

	it('renders correctly', () => {	
		expect(app).toMatchSnapshot();
	});

	it('contains a connected Wallet component', () => {
		expect(app.find('Connect(Wallet)').exists()).toBe(true);
	});

	it('contains a connected Loot componet', () => {
		expect(app.find('Connect(Loot)').exists()).toBe(true);
	});

	it('contains a link to coindesk price page', () => {
		expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
	})
});
