import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('<Image />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Image src="src" alt="alt" />);
    expect(wrapper.find('.image')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Image src="src" />);
    expect(wrapper.find('.image')).toHaveLength(0);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Image alt="alt" />);
    expect(wrapper.find('.image')).toHaveLength(0);
  });

  it('should render the className', () => {
    const wrapper = shallow(<Image src="src" alt="alt" className="class" />);
    expect(wrapper.find('.image.class')).toHaveLength(1);
  });
});
