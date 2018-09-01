import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1.8rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white',
    height: '2.5rem'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Build with ♥ by the&nbsp;
        <a href="https://github.com/orgs/FountainJS/people">
          FountainJS team
        </a>
      </footer>
    );
  }
}
