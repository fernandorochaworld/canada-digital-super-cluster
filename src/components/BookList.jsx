import Button from "./Button";

function BookList({ bookList, handleSelectBook }) {
  return (
    <div className="flex flex-wrap justify-items-center">
      {bookList.map(book => (
        <div>
          {book.title}
          <Button title="❌" onClick={() => handleSelectBook(book)} />
        </div>
      ))}
    </div>
  )
}

export default BookList;