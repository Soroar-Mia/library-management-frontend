
import { useGetAllbooksQuery, useDeleteBookMutation } from "@/redux/api/libraryApi";
import type { Book } from "@/types";
import { useNavigate } from "react-router";
import { toast } from "sonner"; // Optional, for notification

export default function BookList() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetAllbooksQuery(undefined);
    const [deleteBook] = useDeleteBookMutation();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading books</p>;

    const handleDelete = async (id: string) => {
        try {
            await deleteBook(id).unwrap();
            toast.success("Book deleted successfully");
        } catch (err) {
            console.error("Delete error:", err); // <- Now `err` is used
            toast.error("Failed to delete book");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Books</h2>
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Author</th>
                        <th className="border px-4 py-2">Genre</th>
                        <th className="border px-4 py-2">ISBN</th>
                        <th className="border px-4 py-2">Copies</th>
                        <th className="border px-4 py-2">Available</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((book: Book) => (
                        <tr key={book._id}>
                            <td className="border px-4 py-2">{book.title}</td>
                            <td className="border px-4 py-2">{book.author}</td>
                            <td className="border px-4 py-2">{book.genre}</td>
                            <td className="border px-4 py-2">{book.isbn}</td>
                            <td className="border px-4 py-2">{book.copies}</td>
                            <td className="border px-4 py-2">{book.available ? "Yes" : "No"}</td>
                            <td className="border px-4 py-2 space-x-2">
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => navigate(`/edit-book/${book._id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => handleDelete(book._id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="text-green-500 hover:underline"
                                    onClick={() => navigate(`/borrow/${book._id}`)}
                                >
                                    Borrow
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
