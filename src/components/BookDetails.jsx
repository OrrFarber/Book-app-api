import "../App";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BOOKS_DETAILS_URL } from "../API";

export default function Book() {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      axios.get(`${BOOKS_DETAILS_URL}/${id}`).then((res) => {
        setBook(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div className="book-details">
      <div className="book-header">
        <h2>{book?.title}</h2>
        <h4>by {book?.authors}</h4>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-description">
        <h3>Description</h3>
        <p>{book?.description}</p>
        <h3>Genres</h3>
        <p>{book?.genres}</p>
        <h3 className="rate">Rating {book?.rating}</h3>
        <p>{book?.Quote1}</p>
        <p>{book?.Quote2}</p>
        <p>{book?.Quote3}</p>
      </div>
    </div>
  );
}
