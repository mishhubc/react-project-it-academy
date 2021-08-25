import React from 'react';
import './ToDoItem.css';

export const ToDoItem = ({
  value,
  onRemove,
  checked,
  onClick,
  
}) => {
  let itemClassName = 'todo-list__item';

  if (checked) {
    itemClassName += ' list-item--checked';
  }

  return (
    <li className={itemClassName} onClick={onClick}>
      {value}
      <button onClick={onRemove} className={'btn__remove'}>
        {'remove'}
      </button>
    </li>
  );
};
