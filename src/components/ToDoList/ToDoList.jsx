import React, { Component } from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './ToDoList.css';

/*
  1. Add some styling to this componet (Your choice).
  2. Add ability to toogle (check/uncheck) items.
     There should be some styles which will allow to distinguish check/uncked item.
  3. At the bottom of ToDoList component, add button "remove completed tasks"
     which should remove all checked tasks when clicked
*/

export class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      placeholder:'Please type a todo task', 
      items: [],
      isToogleOn: false,
    };
  }

  handleAddClassList = (e) => {
    e.target.classList.toggle('list-item--checked');
  };

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleAddButtonClick = () => {
    const { value, items } = this.state;
    const newItems = [...items, value];

    this.setState({
      value: '',
      items: newItems,
    });
  };
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleAddButtonClick()
    }
  }

  handleRemoveButtonClick = (event) => {
    const itemValue = event.target.previousSibling.wholeText;
    const { items } = this.state;
    const newItems = items.filter((item) => item !== itemValue);

    this.setState({
      items: newItems,
    });

  };


  handleRemoveAll = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    const { value, items } = this.state;

    return (
      <div className={'todo-list'}>
        <div className={'todo-list__controls'}>
          <input
            type={'text'}
            className={'todo-list__input'}
            onChange={this.handleInputChange}
            value={value}
            placeholder={this.state.placeholder}
            onKeyPress={this.handleKeyPress}
          />
          <button
            className={'todo-list__add'}
            onClick={this.handleAddButtonClick}
            disabled={!value}
          >
            {'Add task'}
          </button>
        </div>
        <ul className={'todo-list__list'}>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              value={item}
              onRemove={this.handleRemoveButtonClick}
              onClick={this.handleAddClassList}
              checked={this.state.isToogleOn}
            />
          ))}
        </ul>
        <button
          onClick={this.handleRemoveAll}
          className={'btn__remove--all'}
        >
          {'remove all'}
        </button>
      </div>
    );
  }
}
