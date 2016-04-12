import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  addNote(note){
    dispatch({
      actionType: AppConstants.ADD_NOTE, note
    })
  }

}