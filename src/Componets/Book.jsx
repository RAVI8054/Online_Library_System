//Book componet
function Book({ book }) {
   
    const { author, coverImage, category, title } = book;
    return (
        <div >
            <img src={coverImage} alt={title} width="200px" height="200px" />
            <div>
                <h2> <strong>title:</strong>{title}</h2>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Category:</strong> {category}</p>
            </div>
        </div>
    );
}

export default Book;
