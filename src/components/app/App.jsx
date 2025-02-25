import Header from '../header/Header.jsx'
import ProductList from '../productList/ProductList.jsx'
import NewProductForm from '../newProductForm/NewProductForm.jsx'


const App = () => {
  return (
    <div className="app">
      <Header/>
      <NewProductForm />
      <ProductList/>
    </div>
  )
}

export default App
