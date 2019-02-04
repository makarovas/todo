import React from "react";
import './todo__list.css';
import ListItem from "../list-item/list__item";

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item ">
        <ListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    )
  });


  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
};

export default TodoList;
