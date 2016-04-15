import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import API from '../utils/api.js'

export default {
  addNote(note){
    dispatch({
      actionType: AppConstants.ADD_NOTE, note
    })
    // Optimisitically save -- already added to UI by above dispatch
    API.saveNote(note).catch(() =>
      this.noteAddFailed(note) // have to write failure action / handling in store
    )
  },

  // alternative method: pessimistic - don't change UI until save is OK
  saveNote(note) {
    API.saveNote(note)
      .then(() => this.addNote(note))
      .catch(() => this.showError(`Couln't save note ${note}`))
  },

  getNotes: function() {
    dispatch({
      actionType: AppConstants.GET_NOTES
    });

    API.getNotes().then(ServerActions.receiveList)
  }

}
