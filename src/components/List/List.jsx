import React, { Component } from 'react';
import './List.css';
import { ListItem } from '../ListItem/ListItem';

export class List extends Component {
  state = {
    selected: [],
    clickCount: 0,
  };

  constructor(props) {
    super(props);

    const selected = props.items
      .filter((item) => item.checked)
      .map((item) => item.value);

    this.state = {
      clickCount: 0,
      selected,
    };
  }

  handleItemClick = (event) => {
    const value = Number(event.target.dataset.value);
    const alreadySelected = this.state.selected.includes(value);
    let selected;

    if (alreadySelected) {
      selected = this.state.selected.filter(
        (itemValue) => itemValue !== value
      );
    } else {
      selected = [...this.state.selected, value];
    }

    this.setState({
      selected,
      clickCount: this.state.clickCount + 1,
    });

    console.log('handleItemClick', this);
  };

  render() {
    const { selected, clickCount } = this.state;
    console.log('IM RENDERING', JSON.stringify(this.state, null, 2));

    return (
      <ul className={'list'}>
        {this.props.items.map((item) => (
          <ListItem
            label={item.label}
            value={item.value}
            checked={selected.includes(item.value)}
            key={item.label}
            onClick={this.handleItemClick}
          />
        ))}
        {clickCount}
      </ul>
    );
  }
}
