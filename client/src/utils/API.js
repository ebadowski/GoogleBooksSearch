import axios from "axios";

export default {
 //search for a new book
  searchNewBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&maxResults=25");
  },
  // gets saved books from db
  getsavedBooks: () => {
    return axios.get('/api/saved/all');
  },
  //saves book from search to db
  saveBook: (book) => {
    axios.post('/api/search/save', book);
  },
  //deletes book from saved books
  deleteBook: (id) => {
    return axios.delete("/api/saved/delete/"+id)
  }
}