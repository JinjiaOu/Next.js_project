const books = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        price: 9.99,
        img: "/images/harry-potter.jpg",
    },
    {
        title: "Learn, Improve, Master",
        author: "Nick Velasquez",
        price: 0.99,
        img: "/images/learn-improve.jpg",
    },
    {
        title: "Rita Hayworth and Shawshank Redemption",
        author: "Stephen King",
        price: 5.99,
        img: "/images/shawshank.jpg",
    },
    {
        title: "Death by Fountain: A Christmas Murder in Rome",
        author: "Jennifer S. Alderson",
        price: 4.99,
        img: "/images/death-by-fountain.jpg",
    },
];

export default function Home() {
    return (
        <section className="w-full min-h-screen px-10 py-6">
            {/* Navigation Links */}
            <nav className="flex justify-center space-x-6 py-4 border-b">
                <a href="#" className="font-bold">Category</a>
                <a href="#" className="font-bold">Fiction</a>
                <a href="#" className="font-bold">eBooks</a>
                <a href="#" className="font-bold">Kids</a>
                <a href="#" className="font-bold">Deal</a>
            </nav>

            {/* Section Title */}
            <h1 className="text-4xl font-bold mb-6 text-center">Top Of the Day</h1>

            {/* Books Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full max-w-7xl">
                {books.map((book, index) => (
                    <div key={index} className="book-card text-center max-w-xs mx-auto">
                        <img src={book.img} alt={book.title} className="rounded-md mb-4" />
                        <h2 className="text-lg font-semibold">{book.title}</h2>
                        <p className="text-gray-700">{book.author}</p>
                        <p className="price text-red-500">${book.price.toFixed(2)}</p>
                        <button className="bg-gray-200 rounded px-3 py-2 mt-2">Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
