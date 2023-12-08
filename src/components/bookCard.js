export default function BookCard({book, key, deleteBook}) {
  console.log(book._id)
    return(
        <div class="card-container">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Books"
          height="200"
        />
        <div class="desc">
          <h2><a href="/show-book/{book.id}">{book.title}</a></h2>
          <h3>{book.author}</h3>
          <p>{book.description}</p>
          <p>Pages: {book.pages}</p>
          <button className="btn btn-danger" 
          onClick={() => {deleteBook(book._id);}}>X</button>
        </div>
      </div>
    );
}
