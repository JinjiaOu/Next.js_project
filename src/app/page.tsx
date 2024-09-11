// F:\code\website1\book-pile\src\app\page.tsx

export default function HomePage() {
    const books = [
        {
            title: "Harry Potter and the Sorcerer's Stone",
            price: "$9.99",
            image: "/images/harry-potter.jpg",
        },
        {
            title: "Learn, Improve, Master",
            price: "$0.99",
            image: "/images/learn-improve.jpg",
        },
        {
            title: "Rita Hayworth and Shawshank Redemption",
            price: "$5.99",
            image: "/images/shawshank.jpg",
        },
        {
            title: "Death by Fountain: A Christmas Murder in Rome",
            price: "$4.99",
            image: "/images/death-by-fountain.jpg",
        },
    ];

    return (
        <div className="books-section">
            <h2>Top Of the Day</h2>
            <div className="book-grid">
                {books.map((book, index) => (
                    <div key={index} className="book-item">
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p className="price">{book.price}</p>
                        <button className="cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
