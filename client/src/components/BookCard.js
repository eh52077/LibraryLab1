import React from "react";
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <div 
      className="card h-100 shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/books/${book.id}`)}
    >
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {book.author}
        </h6>
        <p className="card-text">
          Status:{" "}
          <strong>
            {book.available ? "Available " : "Not Available "}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default BookCard;