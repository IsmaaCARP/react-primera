import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(contador) => console.log("Cantidad Agregada", contador)}
      />
    </>
  );
}

export default App;
