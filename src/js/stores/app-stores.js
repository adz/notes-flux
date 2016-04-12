import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _list = [1,2,3,4];

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
    }
    AppStore.emitChange();
  })
})
export default AppStore