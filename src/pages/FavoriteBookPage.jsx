import { DNA } from "react-loader-spinner";
import BookList from "../components/BookList";
import Button from "../components/Button"
import Input from "../components/Input"
import { addBook, getAll, removeBook } from "../services/book-service"
import { useEffect, useState } from "react";

function FavoriteBookPage() {
  const [bookList, setBookList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const handleError = error => {
    setLoading(false);
    console.log(error);
    alert(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

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

  const handleRemoveBook = (book) => {
    
    setLoading(true);
    removeBook(book)
      .then(data => {
        loadData();
      })
      .catch(handleError);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <div className="flex items-end gap-3">
        <Input type="text" name="bookTitle" title="Book title" />
        {
          !loading && 
          <Button title="Add Book" type="submit" styleType="primary" value="add" className="w-32" />
        }
        {
          loading &&
          <DNA
            // visible={true}
            height="50"
            width="150"
            // ariaLabel="dna-loading"
            // wrapperStyle={{}}
            // wrapperclassName="dna-wrapper"
          />
        }
      </div>

      {
        bookList && <BookList bookList={bookList} handleRemoveBook={handleRemoveBook} />
      }

    </form>
  )
}

export default FavoriteBookPage;
