import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _list = [];

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },
  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },
  getList(){
    return _list;
  },
  dispatcherIndex: register( function( action ){

    switch(action.actionType){
      case AppConstants.ADD_NOTE:
        _list.push(action.note);
        break;


      case AppConstants.GET_NOTES_RESPONSE:
        console.log("HERE - API CALL GET_NOTES_RESPONSE")
        // Construct the new todo string
        var newListItem = action.response.results[0]

        // Add the new todo to the list
        _list.push(newListItem);
        TodoStore.emit(CHANGE_EVENT);
        break;


    }
    AppStore.emitChange();
  })
})
export default AppStore