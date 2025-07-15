export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MyLibrary. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                    Designed & built with 💻 by <span className="text-blue-400">Soroar Mia</span>
                </p>
            </div>
        </footer>
    );
}
