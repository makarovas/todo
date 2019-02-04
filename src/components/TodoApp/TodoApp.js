import React, {Component} from 'react';
import TodoList from '../todo-list/todo__list';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import ItemAddForm from '../item-add-form/item-add-form';
import ItemStatusFilter from "../item-status-filter/item-status-filter";


export default class TodoApp extends Component {
  maxId = 100;
  
  constructor() {
    super();
    
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Learn English')
      ],
      term: '',
      filter: 'all',
      
      userData: [
        {whatTodo: false}
      ]
    }
  }
  
  createTodoItem = (name) => {
    return {
      name,
      important: false,
      done: false,
      id: this.maxId++
    };
  };
  
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)];
      return {
        todoData: newArr
      }
    })
  };
  
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      
      return {
        todoData: newArr
      }
      
    })
    
  };
  
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }
  
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };
  
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };
  
  onSearchChange = (term) => {
    this.setState({term})
  };
  
  onFilterChange = (filter) => {
    this.setState({filter})
  };
  
  
  
  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name
        .toLowerCase()
        .indexOf(term
          .toLowerCase()) > -1;
    })
  };
  
  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !items.done);
      case 'done':
        return items.filter((item) => items.done);
      default:
        return items;
    }
  }
  
  render() {
    
    const {todoData, term, filter} = this.state;
    
    const visibleItems = this.filter(
      this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <>
        <div className="todo_outer">
          <Header
            toDo={todoCount}
            done={doneCount}/>
          <div className="row">
            <SearchPanel
              onSearchChange={this.onSearchChange}/>
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <ItemAddForm onItemAdded={this.addItem}/>
        </div>
      </>
    )
  }
}


