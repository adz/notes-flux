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
  },
  save(newItem){
    $.ajax({
      method: "POST",
      url: 'http://localhost:3000/notes',
      data: {note: newItem}
    }).done(() => {
      console.log("DONE")
    })

  }
}
