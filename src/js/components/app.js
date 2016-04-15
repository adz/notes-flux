import React from 'react'
import AppActions from '../actions/app-actions'
import AppServerActions from '../actions/app-server-actions'
import AppStore from '../stores/app-stores'
import List from './list'

class App extends React.Component {

  constructor(props){
    super();
    this.state = {currentList: AppStore.getList()};
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener( this._onChange )
    AppActions.getNotes()
  }
  componentWillUnmount(){
    AppStore.removeChangeListener( this._onChange )
  }
  _onChange(){
    this.setState( {currentList: AppStore.getList()} )
  }

  setRef(ref){
    this.note = ref;
  }

  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    AppActions.addNote(newNote)
  }

  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
        <button
          type="button"
          onClick={this.handleSubmit.bind(this)}>
          Add to list
        </button>
        <List items={this.state.currentList}/>
      </div>
    )
  }
}

export default App;
