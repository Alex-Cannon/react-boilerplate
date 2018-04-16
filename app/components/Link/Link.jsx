import React from 'react';
import history from '../../utils/lib/history.js';

export default class Link extends React.Component {
  onClick(e) {
    const newTab = e.metaKey || e.ctrlKey;
    const externalLink = this.props.href.startsWith('http');

    if (!newTab && !externalLink) {
      e.preventDefault();
      history.push(this.props.href);
    }
  }

  render () {
    if (this.props.target && this.props.target === "_blank") {
      return (
        <a href={this.props.href} onClick={this.onClick.bind(this)} target="_blank" rel="noopener noreferrer">
          {this.props.children}
        </a>
      );
    }

    return (
      <a href={this.props.href} onClick={this.onClick.bind(this)} target={this.props.target}>
        {this.props.children}
      </a>
    );
  }
}