import './productItem.scss'

const ProductItem = ({product, onRemove}) => {
	return (
		<div className="product">
			{product.img && <img src={product.img} alt={product.name} />}
			<h3 className='product__name'>{product.name}</h3>
			<p className="product__description">{product.description}</p>
			<button onClick={() => onRemove(product.id)} className="product__remove">Удалить</button>
		</div>
	)
}

export default ProductItem