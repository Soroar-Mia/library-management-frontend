import { useEffect, useState } from "react";

import { useEditBookMutation, useGetBookByIdQuery } from "../redux/api/libraryApi";
import { useNavigate, useParams } from "react-router";

export default function EditBook() {
    const { id } = useParams();
    const { data, isLoading } = useGetBookByIdQuery(id!);
    const [editBook] = useEditBookMutation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: "", author: "", genre: "FICTION", isbn: "", description: "", copies: 1 });

    useEffect(() => {
        if (data?.data) setFormData(data.data);
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await editBook({ id, ...formData });
        navigate("/books");
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-semibold">Edit Book</h2>
            <input name="title" value={formData.title} className="w-full p-2 border" onChange={handleChange} required />
            <input name="author" value={formData.author} className="w-full p-2 border" onChange={handleChange} required />
            <select name="genre" value={formData.genre} className="w-full p-2 border" onChange={handleChange}>
                {['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'].map(g => <option key={g}>{g}</option>)}
            </select>
            <input name="isbn" value={formData.isbn} className="w-full p-2 border" onChange={handleChange} required />
            <textarea name="description" value={formData.description} className="w-full p-2 border" onChange={handleChange} />
            <input type="number" name="copies" value={formData.copies} className="w-full p-2 border" onChange={handleChange} required />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2">Update Book</button>
        </form>
    );
}