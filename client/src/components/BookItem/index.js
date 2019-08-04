import React from "react";
import "./style.css";
import axios from "axios"
import API from "../../utils/API";

function BookItem(props) {

    return (
        < li className="collection-item avatar">
            <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="" className="circle" />
            <span className="title">{props.volumeInfo.title}</span>

            <p>
                {props.volumeInfo.subtitle
                    ? props.volumeInfo.subtitle
                    : null
                }
            </p>

            <p>
                {props.volumeInfo.authors
                    ? props.volumeInfo.authors.map((author, i) => (
                        (i > 0)
                            ? ", " + author
                            : author
                    ))
                    : "no authors listed"
                }
            </p>
            <p>
                {props.volumeInfo.publishedDate}
            </p>
            {props.volumeInfo.description
                ? <p style={{
                    height: "75px",
                    overflow: "auto"
                }}>
                    {props.volumeInfo.description}
                </p>
                : <p>No description</p>}
            <div className="secondary-content">
                <a href={props.volumeInfo.canonicalVolumeLink} className=""><i className="material-icons">link</i></a>
                {
                    props.parentType === "search"
                        ? <a href="#!" onClick={() => API.saveBook(props.id)} className=""><i className="material-icons">save</i></a>
                        : <a href="#!" onClick={() => API.deleteBook(props.id)} className=""><i className="material-icons">delete_forever</i></a>
                }
            </div>
        </li>
    );
}

export default BookItem;

