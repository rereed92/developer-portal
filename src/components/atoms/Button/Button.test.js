import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

const props = {
  text: 'Test',
};

describe('<Button />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('.button')).toHaveLength(1);
  });

  it('should not render the button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.button')).toHaveLength(0);
  });

  it('should render the "class" class', () => {
    const wrapper = shallow(<Button {...props} className="class" />);
    expect(wrapper.find('.button.class')).toHaveLength(1);
  });

  it('should not render an extra class', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('.class')).toHaveLength(0);
  });

  it('should render disabled', () => {
    const wrapper = shallow(<Button {...props} disabled />);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('should not render disabled', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.prop('disabled')).toBeFalsy();
  });
});
