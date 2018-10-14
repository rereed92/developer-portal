import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

let props = {
  children: [{ child: 'Child' }],
};

describe('<Label />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the className', () => {
    const wrapper = shallow(<Label {...props} className="class" />);
    expect(wrapper.find('.class')).toHaveLength(1);
  });

  it('should have class label if html received', () => {
    const wrapper = shallow(<Label {...props} />);
    expect(wrapper.find('.label')).toHaveLength(1);
  });

  it('should not have class label if no html received', () => {
    props = {
      children: null,
    };
    const wrapper = shallow(<Label {...props} />);
    expect(wrapper.find('.label')).toHaveLength(0);
  });
});
