import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p>⭐ {book.rating}</p>

      <Link to={`/book/${book.id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;