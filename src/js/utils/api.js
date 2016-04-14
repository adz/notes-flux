import ServerActions from '../actions/app-server-actions'
import $ from 'jquery'

export default {
  get(){
    new Promise((resolve, reject) => {
      $.getJSON('http://api.randomuser.me')
        .then((response) => {
          ServerActions.receiveList(response.results);
        })
    })
  }
}


    // return Request.get('http://api.randomuser.me/').set('Accept', 'application/json').end((err, response) => {
    //     if (err) return console.error(err);
    //     console.log(response)
    //     ServerActions.receiveList(response.body);
    //   }
    // );
