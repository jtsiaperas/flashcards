import React from "react";
import API from "../../utils/API";
import "./flashcards.css";

class FlashCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flashcards: [],
            bins: [0,5,25,120,600,3600,18000,86400,432000]
        }
    }

    componentDidMount(){
        API.getFlashCards().then(cards =>
        this.setState({flashcards:cards})
        );
    }

    wasWrong(){

    }

    wasRight(){

    }

    showAnswer(){

    }

    render(){
        let cards = this.state.flashcards;
        console.log(cards);
        for(let i=0; i<cards.length; i++)
        {
            if (cards[i].bin === 0)
            {
                return(
                    <div>
                        <div id="hint">
                            {cards[i].hint}
                        </div>
                        <div id="answer">
                            {cards[i].answer}
                        </div>
                        <button className="button" id="show" onClick={this.showAnswer}>Show Answer</button>
                        <button className="button" id="wrong" onClick={this.wasWrong}>Wrong</button>
                        <button className="button" id="right" onClick={this.wasRight}>Right</button>
                    </div>     
                )
            }
            else
            {
                
            }
        }
        return(
            <div>
                You are out of cards to view, try again later!
            </div>
        );
    }
};

export default FlashCards;