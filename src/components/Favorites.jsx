import React, { useState, useContext } from "react";
import { BooksContext } from "../App";

export default function Favorites() {
  const [books, setBooks] = useState([]);
  const { favorites, setFavorites, addToFaves, removeFromFaves } =
    useContext(BooksContext);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book-card">
            <div>
              <h2>{book.title}</h2>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFaves(book.id)}>
                  Remove from favorites
                </button>
              ) : (
                <button onClick={() => addToFaves(book)}>
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You do not have favorite books yet</h1>
      )}
    </div>
  );
}
