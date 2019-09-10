import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    if (this.props.count) {
      return (
      <div>
        <h3>Score Anda adalah</h3>
        <button onClick={this.props.reset}>Reset</button>
      </div>
      )
      } else {
        return null;
      }
  }
}
