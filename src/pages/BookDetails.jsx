import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === Number(id))
  );

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;