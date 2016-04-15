import ServerActions from '../actions/app-server-actions'
import $ from 'jquery'

export default {
  get(){
    new Promise((resolve, reject) => {
      $.getJSON('http://localhost:3000/notes')
        .then((response) => {
          ServerActions.receiveList(response);
        })
    })
  }
}
