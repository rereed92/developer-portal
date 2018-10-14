import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

let props = {
  children: [{ child: 'Child' }],
};

describe('<Container />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Container {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should have class container if html received', () => {
    const wrapper = shallow(<Container {...props} />);
    expect(wrapper.find('.container')).toHaveLength(1);
  });

  it('should not have class container if no html received', () => {
    props = {
      children: null,
    };
    const wrapper = shallow(<Container {...props} />);
    expect(wrapper.find('.container')).toHaveLength(0);
  });
});
