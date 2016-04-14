import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import API from '../utils/api.js'

export default {
  addNote(note){
    dispatch({
      actionType: AppConstants.ADD_NOTE, note
    })
  },

  getNotes: function() {
    dispatch({
      actionType: AppConstants.GET_NOTES
    });

    API.get();
  }

}