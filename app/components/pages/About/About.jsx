import React from 'react';
import Link from '../../Link/Link.jsx';

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h1>I'm the About page!</h1>
        <Link href="/" children="Home"/>
      </div>
    );  
  }
}