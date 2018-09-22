import axios from "axios";

export default {
  // Gets all books
  getTalents: function() {
    return axios.get("/api/talents");
  },
  // Gets the book with the given id
  getTalent: function(id) {
    return axios.get("/api/talents/" + id);
  },
  // Deletes the book with the given id
  deleteTalent: function(id) {
    return axios.delete("/api/talents/" + id);
  },
  // Saves a book to the database
  saveTalents: function(bookData) {
    return axios.post("/api/talents", talentData);
  }
};