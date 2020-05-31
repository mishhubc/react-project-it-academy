import React from 'react';
import './ToDoItem.css';

export const ToDoItem = ({
  value,
  onRemove,
  checked,
  onClick,
  key,
}) => {
  let itemClassName = 'todo-list__item';

  if (checked) {
    itemClassName += ' list-item--checked';
  }

  return (
    <li className={itemClassName} onClick={onClick} key={key}>
      {value}
      <button onClick={onRemove} className={'btn__remove'}>
        {'remove'}
      </button>
    </li>
  );
};
