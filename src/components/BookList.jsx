import Button from "./Button";

function BookList({ bookList, handleRemoveBook }) {
  return (
    <div>
      {bookList.map(book => (
        <div className="flex items-center gap-3 mb-1">
          {book.title}
          <span className="clickable" onClick={() => handleRemoveBook(book)}>❌</span>
        </div>
      ))}
    </div>
  )
}

export default BookList;