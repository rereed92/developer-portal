import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

const props = {
  children: [{ child: 'Child' }],
};

describe('<List />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('.list')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find('.list')).toHaveLength(0);
  });

  it('should render the className', () => {
    const wrapper = shallow(<List {...props} className="class" />);
    expect(wrapper.find('.class')).toHaveLength(1);
  });

  it('should render the unstyled class', () => {
    const wrapper = shallow(<List {...props} isUnstyled />);
    expect(wrapper.find('.list--unstyled')).toHaveLength(1);
  });

  it('should not render the unstyled class', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('.list--unstyled')).toHaveLength(0);
  });

  it('should render the inline class', () => {
    const wrapper = shallow(<List {...props} isInline />);
    expect(wrapper.find('.list--inline')).toHaveLength(1);
  });

  it('should not render the inline class', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('.list--inline')).toHaveLength(0);
  });
});
