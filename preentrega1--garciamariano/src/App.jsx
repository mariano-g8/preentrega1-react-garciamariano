import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"

const App = () => {
    return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a la mejor tienda de hardware del país"}/>
    </>
  )
}

export default App
