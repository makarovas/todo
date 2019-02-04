import React, {Component} from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component {
  state = {
    name: ''
  };
  onLabelChange = (e) => {
    this.setState({name: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(`${this.state.name}`);
    this.setState({name: ''})
  };
  render() {
    return (
      <>
        <form
          className="row"
          onSubmit={this.onSubmit}>
          <input className="item-add-form form-control search-input"
                 id="add-form"
                 type="text"
                 onChange={this.onLabelChange}
                 placeholder="What need to be done"
                 value={this.state.name}/>
          <label htmlFor="add-form"/>
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.props.onItemAdded}>Add Task
          </button>
        </form>
      </>
    )
  }
}