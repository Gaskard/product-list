import Header from '../header/Header.jsx'
import ProductList from '../productList/ProductList.jsx'
import NewProductForm from '../newProductForm/NewProductForm.jsx'
import {useState} from 'react'


const App = () => {
  
  const [form, setForm] = useState(true)
  
  return (
    <div className="app">
      <Header onToggleForm={() => setForm(!form)}/>
      <NewProductForm form={form}/>
      <ProductList/>
    </div>
  )
}

export default App
