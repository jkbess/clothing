import React from 'react';

import { FormGroupContainer, FormInputContainer, FormLabelContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={ handleChange } { ...otherProps } />
    {
      label
        ? (<FormLabelContainer className={`${otherProps.value.length ? 'shrink' : ''}`}>{ label }</FormLabelContainer>)
        : null
    }
  </FormGroupContainer>
);

export default FormInput;