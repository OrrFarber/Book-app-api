import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "../API";
import { BooksContext } from "../App";
import { useNavigate } from "react-router";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const { favorites, setFavorites, addToFaves, removeFromFaves } =
    useContext(BooksContext);

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    try {
      axios.get(API_URL).then((res) => {
        setBooks(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <div>
              <h2>{book.title}</h2>
            </div>
            <div>
              <img
                src={book.image_url}
                alt="#"
                onClick={() => navigate(`/books/${book.id}`)}
              />
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
        <h1>No books found</h1>
      )}
    </div>
  );
}
