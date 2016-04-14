import React from 'react';
import AppStore from '../stores/app-stores';

class List extends React.Component {

  constructor(props){
    super();
    this.state = {currentList: AppStore.getList()};
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener( this._onChange )
  }
  componentWillUnmount(){
    AppStore.removeChangeListener( this._onChange )
  }
  _onChange(){
    this.setState( {currentList: AppStore.getList()} )
  }


  buildList(){
    return this.state.currentList.map((item, i) => {
      return (
        <li key={i}>{item}</li>
      )
    })
  }

  render(){
    return (
      <ul>
        {this.buildList()}
      </ul>
    )
  }

}

export default List;