import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

import './Fieldset.scss';

const Fieldset = ({
  name, label, onChange, placeholder, value, type,
}) => (
  <fieldset className="fieldset">
    <Label label={label}>
      <Input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </Label>
  </fieldset>
);

Fieldset.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

Fieldset.defaultProps = {
  name: null,
  label: null,
  onChange: () => {},
  placeholder: null,
  value: null,
  type: 'text',
};

export default Fieldset;
