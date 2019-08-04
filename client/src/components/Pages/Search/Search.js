import React, { Component } from "react";
import M from "materialize-css";
import API from "../../../utils/API";
import BookItem from "../../BookItem";


class Search extends Component {
    state = {
        bookList: [],
        searching: false,
        value: " "
    }

    componentDidMount() {
        //this.getBooks()
        M.AutoInit();

    }
    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.setState({ searching: true });
        this.getBooks(this.state.value)
    }


    getBooks(query) {
        API.searchNewBooks(query)
            .then((response) => {
                console.log(response);
                //console.log(response.data.items[0]);
                this.setState({ bookList: response.data.items })
                this.setState({ searching: false });
                //this.sortUsers(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <form className="col s12" onSubmit={this.handleFormSubmit}>
                        <div className="row">
                            <div className="input-field col s4">
                                <i className="material-icons prefix">search</i>
                                <input id="icon_prefix" type="text" className="validate" value={this.state.value} onChange={this.handleInputChange} />
                                <label htmlFor="icon_prefix">Book Title</label>
                            </div>
                        </div>
                    </form>
                </div>

                {
                    this.state.searching
                        ? <div style={{ textAlign: "center" }}>
                            <div className="preloader-wrapper big active" style={{ display: "inline-block" }}>
                                <div className="spinner-layer spinner-blue">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : this.state.bookList.length > 0
                            ? <ul className="collection">
                                {this.state.bookList.map((book, i) => (
                                    <BookItem
                                        key={i}
                                        parentType="search"
                                        book={book}
                                    />
                                ))}
                            </ul>
                            : <p>No Search Results</p>
                }

            </div >
        );
    }
}

export default Search;

// <ul className="collection" style={{ textAlign: "center" }}>

//     {this.state.bookList.length > 0 ?
//         this.state.bookList.map((book, i) => (
//             <BookItem
//                 key={i}
//                 {...book}
//             />
//         ))
//         : this.state.searching
//             ? <div className="preloader-wrapper big active" style={{ display: "inline-block" }}>
//                 <div className="spinner-layer spinner-blue">
//                     <div className="circle-clipper left">
//                         <div className="circle"></div>
//                     </div><div className="gap-patch">
//                         <div className="circle"></div>
//                     </div><div className="circle-clipper right">
//                         <div className="circle"></div>
//                     </div>
//                 </div>
//             </div>
//             : <p>No Search Results</p>
//     }

// </ul>

/////////////////////////
