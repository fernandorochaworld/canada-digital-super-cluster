import Button from "./Button";

function BookList({ bookList, handleSelectBook }) {
  return (
    <div>
      {bookList.map(book => (
        <div className="flex items-center gap-3 mb-1">
          {book.title}
          <span className="clickable" onClick={() => handleSelectBook(book)}>❌</span>
        </div>
      ))}
    </div>
  )
}

export default BookList;