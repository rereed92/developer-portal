import React from 'react';
import { shallow } from 'enzyme';

import Links from './Links';

const props = {
  text: 'Test',
};

describe('<Button />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Links {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the button', () => {
    const wrapper = shallow(<Links {...props} />);
    expect(wrapper.find('.link')).toHaveLength(1);
  });

  it('should not render the button', () => {
    const wrapper = shallow(<Links />);
    expect(wrapper.find('.link')).toHaveLength(0);
  });

  it('should render the "class" class', () => {
    const wrapper = shallow(<Links {...props} className="class" />);
    expect(wrapper.find('.link.class')).toHaveLength(1);
  });

  it('should not render an extra class', () => {
    const wrapper = shallow(<Links {...props} />);
    expect(wrapper.find('.class')).toHaveLength(0);
  });
});
