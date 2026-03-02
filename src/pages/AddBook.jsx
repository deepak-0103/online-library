import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((field) => field === "")) {
      alert("All fields are required!");
      return;
    }

    dispatch(
      addBook({
        ...form,
        id: Date.now(),
        rating: Number(form.rating),
      })
    );

    navigate("/books");
  };

  return (
    <div className="container">
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key]}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;