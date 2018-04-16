import React from 'react';
import Link from '../../Link/Link.jsx';

if (process.env.WEBPACK) {

}

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>
          I'm the Home page!<i className="fa fa-home"></i>
        </h1>
        <Link href="/about" children="About"/>
        <Link href="https://google.com" children="Google" target="_blank"/>
      </div>);
  }
}