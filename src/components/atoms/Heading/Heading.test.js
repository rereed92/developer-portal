import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

const props = {
  children: [{ child: 'Child' }],
};

describe('<Heading />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Heading {...props} />);
    expect(wrapper.find('.heading')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.find('.heading')).toHaveLength(0);
  });

  it('should render the correct level', () => {
    const wrapper = shallow(<Heading {...props} level={2} />);
    expect(wrapper.find('.heading--2')).toHaveLength(1);
  });

  it('should render the correct className', () => {
    const wrapper = shallow(<Heading {...props} className="class" />);
    expect(wrapper.find('.heading.class')).toHaveLength(1);
  });
});
