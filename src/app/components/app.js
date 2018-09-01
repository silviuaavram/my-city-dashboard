import React, { Component } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

const styles = {
  height: '100%'
};

export class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
