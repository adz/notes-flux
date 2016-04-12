import React from 'react'
import AppActions from '../actions/app-actions'
import AppStore from '../stores/app-stores'

class App extends React.Component {

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

  setRef(ref){
    this.note = ref;
  }

  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    AppActions.addNote(newNote)
  }

  buildList(){
    return this.state.currentList.map((item, i) => {
      return (
        <li key={i}>{item}</li>
      )
    })
  }

  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
        <button
          onClick={this.handleSubmit.bind(this)}>
          Add to list
        </button>
        <ul>
          {this.buildList()}
        </ul>
      </div>
    )
  }
}

export default App;