import React, { Component } from 'react';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Ошибка, обнаруженная границей ошибки:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
            <div className={styles.errorBoundary}>
                <div className={styles.errorMessage}>
                    <h2>Упс! Что-то пошло не так.</h2>
                </div>
            </div>
        );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
