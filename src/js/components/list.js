import React from 'react';
import AppStore from '../stores/app-stores';

class List extends React.Component {

  render(){
    const { items } = this.props // destructure out from props
    return (
      <ul>
        {items.map(this.buildItem)}
      </ul>
    )
  }

  buildItem (item, i) {
    return <li key={i}>{item}</li>
  }
}

export default List;
