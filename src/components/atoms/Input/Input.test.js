import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the type', () => {
    const wrapper = shallow(<Input type="ty" />);
    expect(wrapper.prop('type')).toEqual('ty');
  });

  it('should render the name', () => {
    const wrapper = shallow(<Input name="na" />);
    expect(wrapper.prop('name')).toEqual('na');
  });

  it('should render the className', () => {
    const wrapper = shallow(<Input className="class" />);
    expect(wrapper.find('.class')).toHaveLength(1);
  });

  it('should render the placeholder', () => {
    const wrapper = shallow(<Input placeholder="place" />);
    expect(wrapper.prop('placeholder')).toEqual('place');
  });

  it('should render the value', () => {
    const wrapper = shallow(<Input value="val" />);
    expect(wrapper.prop('value')).toEqual('val');
  });
});
