import './productList.scss'
import NewProductForm from '../newProductForm/NewProductForm'
import ProductItem from '../productItem/ProductItem'
import {useState} from 'react'


const ProductList = ({onToggleForm, form}) => {
	
	const [products, setProducts] = useState([])
	
	const addProduct = (newProduct) => {
		setProducts([...products, newProduct])
	}
	
	const removeProduct = (id) => {
		setProducts(products.filter(product => product.id !== id))
	}
	
	return (
		<div>
			<NewProductForm onToggleForm={onToggleForm} form={form} onAddProduct={addProduct}/>
			<div className="product__list">
				{products.map(product => (
					<ProductItem key={product.id} product={product} onRemove={removeProduct}/>
				))}
			</div>
		</div>
	)
}

export default ProductList