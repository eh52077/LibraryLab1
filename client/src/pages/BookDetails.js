import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/books/${id}`
      );
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  const handleBorrow = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:5000/api/borrows/${id}`, // kontrollo në backend nëse është kështu
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Libri u huazua me sukses!");
      fetchBook(); 
    } catch (error) {
      console.error("Borrow error:", error);
      alert("Gabim gjatë huazimit!");
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>
        <strong>Status:</strong>{" "}
        {book.available ? "Available " : "Not Available "}
      </p>

      {book.available && (
        <button
          className="btn btn-success mt-3"
          onClick={handleBorrow}
        >
          Huazo Librin
        </button>
      )}
    </div>
  );
}

export default BookDetails;