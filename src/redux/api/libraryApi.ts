import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book, BorrowSummaryEntry } from "@/types";

export const libraryApi = createApi({
    reducerPath: "libraryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://library-management-theta-two.vercel.app",
    }),
    tagTypes: ["book", "borrow"],
    endpoints: (builder) => ({
        // Get all books
        getAllbooks: builder.query<{ data: Book[] }, void>({
            query: () => "/books",
            providesTags: ["book"]
        }),

        // Get single book by ID
        getBookById: builder.query({
            query: (id: string) => `/books/${id}`,
            providesTags: ["book"],
        }),

        // Add a new book
        addBook: builder.mutation({
            query: (newBook) => ({
                url: "/books",
                method: "POST",
                body: newBook,
            }),
            invalidatesTags: ["book"],
        }),

        // Edit book by ID
        editBook: builder.mutation({
            query: ({ id, ...updatedBook }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: updatedBook,
            }),
            invalidatesTags: ["book"],
        }),

        // Delete book by ID
        deleteBook: builder.mutation({
            query: (id: string) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["book"],
        }),

        // Borrow a book
        borrowBook: builder.mutation({
            query: (borrowInfo) => ({
                url: "/borrow",
                method: "POST",
                body: borrowInfo,
            }),
            invalidatesTags: ["book", "borrow"],
        }),

        // Get borrow summary
        getBorrowSummary: builder.query<{ data: BorrowSummaryEntry[] }, void>({
            query: () => "/borrow",
            providesTags: ["borrow"],
        }),
    }),
});

export const {
    useGetAllbooksQuery,
    useGetBookByIdQuery,
    useAddBookMutation,
    useEditBookMutation,
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
} = libraryApi;
