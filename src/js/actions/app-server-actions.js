import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  receiveList(response){
    dispatch({
      actionType: AppConstants.GET_LIST_RESPONSE, response
    })
  }

}