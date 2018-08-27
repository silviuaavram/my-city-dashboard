import React, { Component } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Client } from './google-client/googleClient';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
  const c = new Client();
  return (
      <div style={styles.container}>
        <Header />
        <main style={styles.main} />
        <Footer />
      </div>
    );
  }
}
