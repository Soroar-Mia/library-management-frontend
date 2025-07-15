import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 text-white p-4 flex justify-between">
            <h1 className="font-bold text-xl">Library System</h1>
            <div className="space-x-4">
                <Link to="/books">All Books</Link>
                <Link to="/create-book">Add Book</Link>
                <Link to="/borrow-summary">Borrow Summary</Link>
            </div>
        </nav>
    );
}