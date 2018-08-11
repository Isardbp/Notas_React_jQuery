import React, {Component} from 'react';
//import {notes} from '../json/notes.json'

//var not = notes;

class Write extends Component{
    render(){

      /*function foo(){
        not.push({"text" : document.getElementById('input').value})
        alert(not[2].text);
        //document.getElementById('input').value
      }
      */
      return(
          <form className="form-inline">
              <div className="form-group">
                  <input class="form-control" id="input" type="text" placeholder="Default input"></input>
                <a id="button_input" class="btn btn-primary ml-2">Send</a>
              </div>
          </form>
        )
    }
  }


class Footer_body extends Component{

    render() {
        /*const notes = not.map((notes) => {
            return(
                <div className="alert alert-primary">
                    {notes.text}
                </div>
            )
        });
        */
      return(
        <div>
            <div className="card-body" id="input_div_note"></div>
            <div className="card-footer"><Write /></div>
        </div>
      )
    }
}

export default Footer_body;
