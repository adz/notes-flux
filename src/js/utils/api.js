import ServerActions from '../actions/app-server-actions'
import $ from 'jquery'

export default {
  getNotes(){
    // The point of wrapping in a promise to to use a "Promise" object
    // instead of the jquery non-standard one. The biggest difference (only?)
    // is that jquery won't catch exceptions and pass along to reject
    //new Promise((resolve, reject) => {
      //$.getJSON('http://localhost:3000/notes')
        //.then((response) => {
          //ServerActions.receiveList(response);
        //})
    //})
    //
    return this.getJSON('http://localhost:3000/notes')
  },

  saveNote(newItem){
    return this.request('POST', 'http://localhost:3000/notes', { node: newItem })
  },

  // This wraps the jquery promise, which we use with the Promise 'then'
  // not jqueries one
  request (method, url, data) {
    let ajaxCall = $.ajax({ method, url, data })
    return Promise.resolve(ajaxCall)
  },

  // This wraps the jquery promise, which we use with the Promise 'then'
  // not jqueries one
  getJSON (url) {
    return Promise.resolve($.getJSON(url))
  }
}
