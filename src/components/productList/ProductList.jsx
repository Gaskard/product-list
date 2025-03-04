import './productList.scss'


const ProductList = () => {
	
	
	
	return (
		<>
			<div className="product">
				<h2 className="product__title-good">Хорошие товары</h2>
				<div className="product__list">
					<div>товар</div>
					<div>товар</div>
					<div>товар</div>
				</div>
			</div>
			<div className="product">
				<h2 className="product__title-bad">Плохие товары</h2>
				<div className="product__list">
					<div>товар</div>
					<div>товар</div>
					<div>товар</div>
				</div>
			</div>
		</>
	)
}

export default ProductList