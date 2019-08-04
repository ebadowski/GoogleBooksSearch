import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

    class BookItem extends Component {
        constructor(props) {
            //console.log(props)
            super(props);
            this.state = {
                book: props.book,
                parentType: props.parentType
            }
        }
        deleteClick(id) {
            API.deleteBook(id)
            this.props.parent.updateStateOnDelete()
            //props.updateState()
        }
        render() {
            return (
                < li className="collection-item avatar">
                    <img src={
                        this.state.book.volumeInfo.imageLinks == null
                            ? "https://gamepedia.cursecdn.com/cultistsimulator_gamepedia_en/b/bf/Dehoris1latin.png"
                            : this.state.book.volumeInfo.imageLinks.smallThumbnail
                    } alt="" className="circle" />
                    <span className="title">{this.state.book.volumeInfo.title}</span>

                    <p>
                        {this.state.book.volumeInfo.subtitle
                            ? this.state.book.volumeInfo.subtitle
                            : null
                        }
                    </p>

                    <p>
                        {this.state.book.volumeInfo.authors
                            ? this.state.book.volumeInfo.authors.map((author, i) => (
                                (i > 0)
                                    ? ", " + author
                                    : author
                            ))
                            : "no authors listed"
                        }
                    </p>
                    <p>
                        {this.state.book.volumeInfo.publishedDate}
                    </p>
                    {this.state.book.volumeInfo.description
                        ? <p style={{
                            height: "75px",
                            overflow: "auto"
                        }}>
                            {this.state.book.volumeInfo.description}
                        </p>
                        : <p>No description</p>}
                    <div className="secondary-content">
                        <a href={this.state.book.volumeInfo.canonicalVolumeLink} className=""><i className="material-icons">link</i></a>
                        {
                            this.state.parentType === "search"
                                ? <a href="#!" onClick={() => API.saveBook(this.state.book)} className=""><i className="material-icons">save</i></a>
                                : <a href="#!" onClick={() => this.props.parent.updateStateOnDelete(this.state.book.id)} className=""><i className="material-icons" style={{ color: "red" }}>delete_forever</i></a>
                        }
                    </div>
                </li>
            );
        }

    }

    export default BookItem;

