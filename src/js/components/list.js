import React from 'react';
import AppStore from '../stores/app-stores';

// stateless react components are simple functions that just get passed props
// here i destructure it directly to get out items
const List = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    )}
  </ul>
)

export default List;
