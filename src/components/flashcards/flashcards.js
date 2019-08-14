import React from "react";
import API from "../../utils/API";
import "./flashcards.css";
import $ from "jquery";

class FlashCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flashcards: [],
            bins: [0,5,25,120,600,3600,18000,86400,432000],
            selected:{}
        }
    }

    componentDidMount(){
        API.getFlashCards().then(cards =>{
            console.log(cards);
            this.setState({flashcards:cards.data});
        });
    }

    wasWrong(card){
        
        let cards = this.state.flashcards;
        card.bin = 1;
        cards[card.index] = card;
        this.setState({flashcards: cards});
        $("#right").css("opacity",0);
        $("#answer").css("opacity",0.0);
        $("#wrong").css("opacity",0.0);
        $("#show").css("opacity",1);
    }

    wasRight(card){
        let cards = this.state.flashcards;
        card.bin++;
        cards[card.index] = card;
        this.setState({flashcards: cards});
        $("#right").css("opacity",0);
        $("#answer").css("opacity",0.0);
        $("#wrong").css("opacity",0.0);
        $("#show").css("opacity",1);
    }

    showAnswer(){
        $("#right").css("opacity",1.0);
        $("#answer").css("opacity",1.0);
        $("#wrong").css("opacity",1.0);
        $("#show").css("opacity",0);
    }
    
    getCard(cards){
        if (cards){
            for(let i=0; i<cards.length; i++)
            {
            
                if (cards[i].bin === 0)
                {
                    cards[i].index = i;
                    return cards[i];
                }
                console.log(Date.now()-cards[i].lastViewed);
                if((Date.now()-cards[i].lastViewed) /1000 >= this.state.bins[i])
                {
                    cards[i].index = i;
                    return cards[i];
                }
            }
        }
    }

    render(){
        let card = this.getCard(this.state.flashcards);
       
        return(
            <div id="flashcard">
                <div id="hint">
                    { card ? (card.hint):("")}
                </div>
                <div id="answer">
                    { card ? (card.answer):("")}
                </div>
                { card ? (
                <div>
                    <button className="button" id="wrong" onClick={()=>this.wasWrong(card)}>Wrong</button>
                    <button className="button" id="show" onClick={this.showAnswer}>Show Answer</button>
                    <button className="button" id="right" onClick={()=>this.wasRight(card)}>Right</button>
                </div>
                ):(<div>You're out of cards to view</div>)}  
            </div>     
        )
        }
    
};

export default FlashCards;