import React from "react";
import "./admin.css";
import API from "../../utils/API";

class Admin extends React.Component {

constructor(props)
{
    super(props);
}

handlesubmit(event){
    event.preventDefault();
    let card = {};
    let form = document.forms["newCard"];
    card.hint = form.hint.value;
    card.answer = form.answer.value;
    console.log(card);
    API.saveFlashCard(card)
    .then(result =>{
        alert("flashcard created!");
        console.log(result);
        form.hint.value ="";
        form.answer.value = "";
    });
}
render(){
 return(
    <div className="card">
        <form name="newCard" id="newCard" action="api/flashcard" method ="post" onSubmit={this.handlesubmit}>
            <label htmlFor="hint">Hint</label>
            <input type="text"  name="hint"></input>
            <label htmlFor="answer">Answer</label>
            <input type="text"  name="answer"></input>
            <input type="submit" />
        </form>
    </div>
  
 )
}

}

export default Admin;