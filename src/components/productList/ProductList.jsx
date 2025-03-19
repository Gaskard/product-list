import NewProductForm from '../newProductForm/NewProductForm'
import ProductItem from '../productItem/ProductItem'

import './productList.scss'

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
			<h2 className="product__list__header-good">Хорошие товары</h2>
			<div className="product__list">
				{products.filter(product => product.type === 'good').map(product => (
					<ProductItem key={product.id} product={product} onRemove={removeProduct}/>
				))}
			</div>
			
			<h2 className="product__list__header-bad">Плохие товары</h2>
			<div className="product__list">
				{products.filter(product => product.type === 'bad').map(product => (
					<ProductItem key={product.id} product={product} onRemove={removeProduct}/>
				))}
			</div>
		</div>
	)
}

export default ProductList