import './App.css';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import BookList from "./components/bookList";
import AddBookForm from './components/addBookForm';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<BookList />} />
        <Route path="/create-book" exact element={<AddBookForm />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
