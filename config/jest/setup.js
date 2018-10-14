/* eslint-disable*/

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
window.matchMedia =
window.matchMedia ||
function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
