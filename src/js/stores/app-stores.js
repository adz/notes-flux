import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import API from '../utils/api'

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
        API.save({note: action.note})
        _list.push(action.note);
        break;

      case AppConstants.GET_NOTES_RESPONSE:
        action.response.map((item, key) => {
          _list.push(item.note);
        })
        break;
    }
    AppStore.emitChange();
  })
})
export default AppStore