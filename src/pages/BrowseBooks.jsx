import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      <h1>Browse Books</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;