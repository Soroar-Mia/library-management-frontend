import { useGetBorrowSummaryQuery } from "@/redux/api/libraryApi";
import type { BorrowSummaryEntry } from "@/types";

export default function BorrowSummary() {
    const { data, isLoading } = useGetBorrowSummaryQuery();

    if (isLoading) return <p>Loading summary...</p>;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Borrow Summary</h2>
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">ISBN</th>
                        <th className="border px-4 py-2">Total Borrowed</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((entry: BorrowSummaryEntry) => (
                        <tr key={entry.book.isbn}>
                            <td className="border px-4 py-2">{entry.book.title}</td>
                            <td className="border px-4 py-2">{entry.book.isbn}</td>
                            <td className="border px-4 py-2">{entry.totalQuantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
