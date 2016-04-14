import ServerActions from '../actions/app-server-actions'
// import Request from 'superagent'
import 'isomorphic-fetch';
import 'babel-polyfill';

export default {
  get(){
    fetch('http://api.randomuser.me')
      .then((response) => {
        console.log(response.json())
      })
  }
}

