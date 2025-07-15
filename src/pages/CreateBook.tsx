import { useState } from "react";

import { useAddBookMutation } from "../redux/api/libraryApi";
import { useNavigate } from "react-router";

export default function CreateBook() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "FICTION",
        isbn: "",
        description: "",
        copies: 1,
    });
    const navigate = useNavigate();
    const [addBook] = useAddBookMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addBook(formData);
        navigate("/books");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-semibold">Add New Book</h2>
            <input name="title" placeholder="Title" className="w-full p-2 border" onChange={handleChange} required />
            <input name="author" placeholder="Author" className="w-full p-2 border" onChange={handleChange} required />
            <select name="genre" className="w-full p-2 border" onChange={handleChange}>
                {['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'].map(g => <option key={g}>{g}</option>)}
            </select>
            <input name="isbn" placeholder="ISBN" className="w-full p-2 border" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" className="w-full p-2 border" onChange={handleChange} />
            <input type="number" name="copies" placeholder="Copies" className="w-full p-2 border" min="1" onChange={handleChange} required />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Book</button>
        </form>
    );
}