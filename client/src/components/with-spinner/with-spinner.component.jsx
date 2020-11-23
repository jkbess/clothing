import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProperties }) => {
  return isLoading ? <Spinner/> : <WrappedComponent {...otherProperties} />;
};

export default WithSpinner;