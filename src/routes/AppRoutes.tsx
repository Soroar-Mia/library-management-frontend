// src/routes/AppRoutes.tsx

import BookList from "../pages/BookList";
import CreateBook from "../pages/CreateBook";
import EditBook from "../pages/EditBook";
import BorrowBook from "../pages/BorrowBook";
import BorrowSummary from "../pages/BorrowSummary";
import { Route, Routes } from "react-router";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/books' element={<BookList />} />
            <Route path='/create-book' element={<CreateBook />} />
            <Route path='/edit-book/:id' element={<EditBook />} />
            <Route path='/borrow/:bookId' element={<BorrowBook />} />
            <Route path='/borrow-summary' element={<BorrowSummary />} />
            <Route path='*' element={<BookList />} />
        </Routes>
    );
}
