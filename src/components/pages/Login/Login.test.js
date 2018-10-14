import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Login from './Login';

const mockStore = configureStore([]);
const store = mockStore({});

describe('<Login />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Login store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
