import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-info"
          type="button">All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary">Active
        </button>
        <button type="button"
                className="btn btn-outline-secondary">Done
        </button>
      </div>
    )
  }
}

