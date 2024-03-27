
function BookList({bookList, handleSelectBook}) {
    return (
      <div className="flex flex-wrap justify-items-center">
        {bookList.map(book => (
          <img
            className="clickable"
            src={book.book_images[0].image_url_small}
            style={{ width: '134px', height: '180px' }}
            onClick={() => handleSelectBook(book)}
          />
          // width: '268px', height: '361px'
        ))}
      </div>
    )
}

export default BookList;