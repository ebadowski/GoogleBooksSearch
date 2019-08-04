import axios from "axios";

export default {
 //search for a new book
  searchNewBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&maxResults=25");
  },
  //saves book from search to db
  saveBook: (id) => {
    axios.post("/search/save/"+id)
  }
}