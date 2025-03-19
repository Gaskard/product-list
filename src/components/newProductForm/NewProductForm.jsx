import './newProductForm.scss'
import {useState} from 'react'


const NewProductForm = ({form, onAddProduct, onToggleForm}) => {
	
	const [name, setName] = useState('')
	const [img, setImg] = useState('')
	const [description, setDescription] = useState('')
	const [type, setType] = useState('')
	
	const addNewProduct = (e) => {
		e.preventDefault()
		
		onToggleForm()
		
		if (!name.trim() || !type) return;
		
		const newProduct = {
			id: Date.now(),
			name,
			img,
			description,
			type
		}
		
		onAddProduct(newProduct)
		
		setName('')
		setImg('')
		setDescription('')
		setType('')
	}
	
	
	
	return form ? (
		<form className="form" onSubmit={addNewProduct}>
			<h2 className="form__title">Добавить новый товар</h2>
			<div className="form__input">
				<h3 className="form__input-header">Название товара</h3>
				<input
					type="text"
					placeholder='Введите название товара'
					className="form__input-value"
					value={name}
					onChange={e => setName(e.target.value)}/>
			</div>
			
			<div className="form__input">
				<h3 className="form__input-header">URL изображения</h3>
				<input
					type="text"
					placeholder='Введите URL изображения (необязательно)'
					className="form__input-value"
					value={img}
					onChange={e => setImg(e.target.value)}/>
			</div>
			
			<div className="form__input">
				<h3 className="form__input-header">Описание</h3>
				<textarea
					name="productDescription"
					cols="30"
					rows="10"
					className='form__input-textarea'
					value={description}
					onChange={e => setDescription(e.target.value)}>
				</textarea>
			
			</div>
			
			<div className="form__input">
				<h3 className="form__input-header">Тип товара</h3>
				<select value={type} onChange={(e) => setType(e.target.value)}
				        name="category"
				        className='form__input-select'>
					<option>Выберите категорию</option>
					<option value='good'>Хорошие товары</option>
					<option value='bad'>Плохие товары</option>
				</select>
			</div>
			
			<div className="form__buttons">
				<button onClick={onToggleForm} className="form__buttons-cancel">Отмена</button>
				<button type='submit' className="form__buttons-add">Добавить</button>
			</div>
		</form>
	) : null
}

export default NewProductForm