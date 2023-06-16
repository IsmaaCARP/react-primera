import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(cantidad) => console.log("Cantidad Agregada " + cantidad)}
      />
    </div>
  );
}

export default App;
