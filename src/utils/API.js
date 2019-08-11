import axios from "axios";

var instance = axios.create({});
var apiURL = process.env.API_URL || "http://localhost:3001";


export default {
  // Gets all flashcards
  getFlashCards: () => {
    return instance.get(`${apiURL}/api/flashcards`);
  },
  // saves flashcard
  saveFlashCard: (card) =>{
    return instance.post(`${apiURL}/api/flashcard/`,card);
  }
};