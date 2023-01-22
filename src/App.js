import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import AppContext from "./components/context/appContext";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const BooksContext = createContext();

function App() {
  const { favorites, setFavorites, addToFaves, removeFromFaves } = AppContext();
  const contextValue = { favorites, setFavorites, addToFaves, removeFromFaves };

  return (
    <BooksContext.Provider value={contextValue}>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        <Footer />
      </div>
    </BooksContext.Provider>
  );
}

export default App;

// react syntax
// state props and components
//reusable components
//hooks
//loops in react
//destructing
//forms
//router
//api
