import React, {Component} from "react";
import './input.css'


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
        <input
          type="text"
          className="form-control search-input "
          placeholder="Type to search"
          aria-label="Username"
          onChange={this.onSearchChange}
          value={this.state.term}/>
      </>
    )
  }
};

