import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('should render without crashing', () => {
		shallow(<App />);
	}); // should render without crashing

	it('should render matched snapshots', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	}); // should render matched snapshots

	it('should render <div className="component-app">', () => {
		const wrapper = shallow(<App />);
		const elements = wrapper.find('.component-app');
		expect(elements.length).toBe(1);
	});
});
