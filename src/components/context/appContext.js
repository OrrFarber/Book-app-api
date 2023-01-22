import { createContext, useState, useContext } from "react";

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (context === undefined) {
//     console.log("error - must be within context provider");
//   }
//   return context;
// };

function AppContext() {
  const [favorites, setFavorites] = useState([]);

  const addToFaves = (book) => {
    const oldFaves = [...favorites];
    const newFaves = oldFaves.concat(book);
    setFavorites(newFaves);
  };

  const removeFromFaves = (id) => {
    const oldFaves = [...favorites];
    const newFaves = oldFaves.filter((book) => book.id !== id);
    setFavorites(newFaves);
  };

  return { favorites, setFavorites, addToFaves, removeFromFaves };
}
export default AppContext;
