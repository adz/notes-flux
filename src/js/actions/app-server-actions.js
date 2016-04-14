import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  receiveList(response){
    dispatch({
      actionType: AppConstants.GET_NOTES_RESPONSE, response
    })
  }

}