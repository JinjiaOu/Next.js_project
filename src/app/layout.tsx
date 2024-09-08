import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
        <body className="container mx-auto">
        <header>
            <nav className="flex justify-between items-center p-4 bg-gray-100">
                <div className="logo text-2xl">BOOK PILE</div>
                <input
                    type="search"
                    placeholder="Search"
                    className="border rounded px-4 py-2"
                />
                <div>
                    <button className="px-4 py-2">Register</button>
                    <button className="px-4 py-2">Login</button>
                    <button className="px-4 py-2">Cart</button>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-center py-4">
            <div className="flex justify-around">
                <p>Company</p>
                <p>Follow</p>
            </div>
            <p>&copy; 2024 All Rights Reserved</p>
        </footer>
        </body>
        </html>
    );
}
