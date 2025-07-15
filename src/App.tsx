// src/App.tsx
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 p-4">
        <Navbar />
        <AppRoutes />
        <Toaster />
        <Footer />
      </main>
    </div>
  );
}
