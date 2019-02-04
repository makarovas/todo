import React, {Component} from "react";
import './input.css'
import ItemStatusFilter from './../item-status-filter/item-status-filter'

export default class SearchPanel extends Component {
  state = {
    term: ''
  };
  onSearchChange = (e) => {
const term = e.target.value;
this.setState({term});
this.props.onSearchChange(term);
  };

  render() {
    return (
      <>
        <div className="row">
          <input
            type="text"
            className="form-control search-input "
            placeholder="type to search"
            aria-label="Username"
            onChange={this.onSearchChange}
            value={this.state.term}/>
          <ItemStatusFilter/>
        </div>
      </>
    )
  }
};

