import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  };

  static getDerivedStateFromError(error) {
    // process error
    return {hasError: true}
  }

  componentDidCatch(error, info) {
    // perform some side effect
  }

  render () {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png' />
          <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
};

export default ErrorBoundary;