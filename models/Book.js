'use strict';

// Dependencies
const mongoose = require('mongoose');

// Mongoose Schema constructor reference
const Schema = mongoose.Schema;

// Define Item schema
const bookSchema = new Schema({
    "kind": {
      type: "String"
    },
    "id": {
      type: Schema.Types.String,
      unique: true
    },
    "etag": {
      type: "String"
    },
    "selfLink": {
      type: "String"
    },
    "volumeInfo": {
      "title": {
        type: "String"
      },
      "authors": {
        type: [
          "String"
        ]
      },
      "publisher": {
        type: "String"
      },
      "publishedDate": {
        type: "Date"
      },
      "description": {
        type: "String"
      },
      "industryIdentifiers": {
        type: [
          "Mixed"
        ]
      },
      "readingModes": {
        "text": {
          type: "Boolean"
        },
        "image": {
          type: "Boolean"
        }
      },
      "pageCount": {
        type: "Number"
      },
      "printedPageCount": {
        type: "Number"
      },
      "dimensions": {
        "height": {
          type: "String"
        },
        "width": {
          type: "String"
        },
        "thickness": {
          type: "String"
        }
      },
      "printType": {
        type: "String"
      },
      "categories": {
        type: [
          "String"
        ]
      },
      "averageRating": {
        type: "Number"
      },
      "ratingsCount": {
        type: "Number"
      },
      "maturityRating": {
        type: "String"
      },
      "allowAnonLogging": {
        type: "Boolean"
      },
      "contentVersion": {
        type: "String"
      },
      "panelizationSummary": {
        "containsEpubBubbles": {
          type: "Boolean"
        },
        "containsImageBubbles": {
          type: "Boolean"
        }
      },
      "imageLinks": {
        "smallThumbnail": {
          type: "String"
        },
        "thumbnail": {
          type: "String"
        },
        "small": {
          type: "String"
        },
        "medium": {
          type: "String"
        },
        "large": {
          type: "String"
        }
      },
      "language": {
        type: "String"
      },
      "previewLink": {
        type: "String"
      },
      "infoLink": {
        type: "String"
      },
      "canonicalVolumeLink": {
        type: "String"
      }
    },
    "saleInfo": {
      "country": {
        type: "String"
      },
      "saleability": {
        type: "String"
      },
      "isEbook": {
        type: "Boolean"
      }
    },
    "accessInfo": {
      "country": {
        type: "String"
      },
      "viewability": {
        type: "String"
      },
      "embeddable": {
        type: "Boolean"
      },
      "publicDomain": {
        type: "Boolean"
      },
      "textToSpeechPermission": {
        type: "String"
      },
      "epub": {
        "isAvailable": {
          type: "Boolean"
        }
      },
      "pdf": {
        "isAvailable": {
          type: "Boolean"
        }
      },
      "webReaderLink": {
        type: "String"
      },
      "accessViewStatus": {
        type: "String"
      },
      "quoteSharingAllowed": {
        type: "Boolean"
      }
    }
  }
)
  // Create Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;