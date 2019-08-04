import React from "react";
import "./style.css";
import API from "../../utils/API";

function BookItem(props) {

    return (
        < li className="collection-item avatar">
            <img src={
                props.book.volumeInfo.imageLinks == null
                ? "https://gamepedia.cursecdn.com/cultistsimulator_gamepedia_en/b/bf/Dehoris1latin.png"
                : props.book.volumeInfo.imageLinks.smallThumbnail
                } alt="" className="circle" />
            <span className="title">{props.book.volumeInfo.title}</span>

            <p>
                {props.book.volumeInfo.subtitle
                    ? props.book.volumeInfo.subtitle
                    : null
                }
            </p>

            <p>
                {props.book.volumeInfo.authors
                    ? props.book.volumeInfo.authors.map((author, i) => (
                        (i > 0)
                            ? ", " + author
                            : author
                    ))
                    : "no authors listed"
                }
            </p>
            <p>
                {props.book.volumeInfo.publishedDate}
            </p>
            {props.book.volumeInfo.description
                ? <p style={{
                    height: "75px",
                    overflow: "auto"
                }}>
                    {props.book.volumeInfo.description}
                </p>
                : <p>No description</p>}
            <div className="secondary-content">
                <a href={props.book.volumeInfo.canonicalVolumeLink} className=""><i className="material-icons">link</i></a>
                {
                    props.parentType === "search"
                        ? <a href="#!" onClick={() => API.saveBook(props.book)} className=""><i className="material-icons">save</i></a>
                        : <a href="#!" onClick={() => API.deleteBook(props.book.id)} className=""><i className="material-icons">delete_forever</i></a>
                }
            </div>
        </li>
    );
}

export default BookItem;

