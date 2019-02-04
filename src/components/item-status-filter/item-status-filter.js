import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {
  
  buttons = [
    {status: 'all', name: 'All'},
    {status: 'active', name: 'Active'},
    {status: 'done', name: 'Done'}
  ];
  
  render() {
    const {filter} = this.props;
    const buttons = this.buttons.map(({status, name}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          className={`btn ${clazz}`}
          type="button"
          key={status}>
          {name}
        </button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

