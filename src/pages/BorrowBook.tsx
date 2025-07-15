
import { useBorrowBookMutation } from "@/redux/api/libraryApi";
import { useState } from "react";

import { useNavigate, useParams } from "react-router";

export default function BorrowBook() {
    const { bookId } = useParams();
    const [borrowBook] = useBorrowBookMutation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await borrowBook({ book: bookId, quantity, dueDate });
        navigate("/borrow-summary");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-semibold">Borrow Book</h2>
            <input type="number" min="1" className="w-full p-2 border" value={quantity} onChange={e => setQuantity(+e.target.value)} required />
            <input type="date" className="w-full p-2 border" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
            <button type="submit" className="bg-green-600 text-white px-4 py-2">Borrow</button>
        </form>
    );
}