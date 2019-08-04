import React, { Component } from "react";
import M from "materialize-css";
import API from "../../../utils/API";
import BookItem from "../../BookItem";


class Saved extends Component {
    state = {
        bookList: [],
        waiting: true,
    }

    componentDidMount() {
        this.getBooks()
        M.AutoInit();

    }


    getBooks() {
        API.getsavedBooks()
            .then((response) => {
                console.log(response);
                this.setState({ bookList: response.data, waiting: false });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    updateStateOnDelete(id) {
        //console.log(API.deleteBook(id))
        API.deleteBook(id).then(() => {
            this.setState({ bookList: [] })
            this.getBooks()
        })
    }

    render() {
        return (
            <div>



                {
                    this.state.waiting
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
                                        parentType="saved"
                                        book={book}
                                        parent={this}
                                    />
                                ))}
                            </ul>
                            : this.state.waiting
                                ? null
                                : <div>
                                    <p>No Saved Books</p>
                                    <a href="/search" className="waves-effect waves-teal btn-flat">Save Some Books</a>
                                </div>
                }

            </div >
        );
    }
}

export default Saved;