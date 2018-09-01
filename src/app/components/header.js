import React, { Component } from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    height: '4.5rem'
  },
  title: {
    flex: 1,
    fontSize: '3rem',
    padding: '.5rem',
    textAlign: 'center',
    margin: '0'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            My City Dashboard
          </a>
        </p>
      </header>
    );
  }
}
