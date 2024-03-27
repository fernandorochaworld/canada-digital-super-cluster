import { DNA } from "react-loader-spinner";
import BookList from "../components/BookList";
import Button from "../components/Button"
import Input from "../components/Input"
import { addBook, getAll } from "../services/book-service"
import { useEffect, useState } from "react";

function FavoriteBookPage() {
  const [book, setBook] = useState();
  const [bookList, setBookList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const handleError = error => {
    setLoading(false);
    alert('No book matching your query was found.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setBook(null);
    setBookList(null);

    addBook(e.target.bookTitle.value)
      .then(data => {
        document.getElementsByName('bookTitle')[0].value = '';
        loadData();
      })
      .catch(handleError);
  }

  const loadData = () => {
    setLoading(true);
    getAll()
      .then(data => {
        setBookList(data);
        setLoading(false);
      })
      .catch(handleError);
  }

  const handleSelectBook = (book) => {
    setBook(book);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {
        loading &&
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      }

      <div className="flex items-end gap-3">
        <Input type="text" name="bookTitle" title="Book title" />
        <Button title="Add Book" type="submit" styleType="primary" value="add" className="w-32" />
      </div>

      {
        bookList && <BookList bookList={bookList} handleSelectBook={handleSelectBook} />
      }

    </form>
  )
}

export default FavoriteBookPage;
