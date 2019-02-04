import React, {Component} from "react";
import './list__item.css'

export default class ListItem extends Component {
  // onNameClick = () => {
  //   this.setState(({done}) => {
  //       return {
  //         done: !done
  //
  //       }
  //     }
  //   )
  // };
  // onMarkImportant = () => {
  //   this.setState(({important}) => {
  //     return {
  //       important: !important
  //     }
  //   })
  // };

  render() {
    const {
      name,
      onDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important
    } = this.props;


    let classNames = 'todo-list-item row between-xs between-sm between-md between-lg';

    if (important) {
      classNames += ' important';
    }

    if (done) {
      classNames += ' done';
    }

    return (
      <div className={classNames}>
         <span
           className="
           list__item
           todo-list-item-label
           col-xs
           col-sm
           col-md
           col-lg"

           onClick={onToggleDone}>
           {name}
         </span>
        <button type="button"
                className="
                btn
                btn-outline-danger
                btn-sm
                col-xs-1
                col-sm-1
                col-md-1
                col-lg-1"
                onClick={onDeleted}
        >
          <i className="fa fa-trash-o"/>
        </button>
        <button type="button"
                className="
                btn
                btn-outline-success
                btn-sm
                col-xs-1
                col-sm-1
                col-md-1
                col-lg-1"
                onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation"/>
        </button>
      </div>
    );
  }
}



