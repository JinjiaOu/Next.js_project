// F:\code\website1\book-pile\src\app\layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Book Pile</title>
        </head>
        <body>
        {/* Header Section */}
        <header className="header">
            <div className="logo">
                <img src="/images/Logo.jpg" alt="Book Pile Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="nav-links">
                <button>Register</button>
                <button>Login</button>
            </div>
        </header>

        {/* Navigation Menu */}
        <nav className="menu">
            <ul>
                <li><a href="#">Category</a></li>
                <li><a href="#">Fiction</a></li>
                <li><a href="#">eBooks</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Deal</a></li>
            </ul>
        </nav>

        <main>{children}</main>

        {/* Footer Section */}
        <footer className="footer">
            <div className="company-info">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Accessibility Statement</a></li>
                </ul>
            </div>
            <div className="social-links">
                <h4>Follow</h4>
                <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
        </footer>
        </body>
        </html>
    );
}
