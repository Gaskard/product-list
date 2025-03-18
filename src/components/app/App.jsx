import Header from '../header/Header.jsx'
import ProductList from '../productList/ProductList.jsx'
import {useState} from 'react'


const App = () => {
  
  const [form, setForm] = useState(true)
  
  return (
    <div className="app">
      <Header onToggleForm={() => setForm(!form)}/>
      <ProductList onToggleForm={() => setForm(!form)} form={form}/>
    </div>
  )
}

export default App
