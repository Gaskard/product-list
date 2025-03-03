import './newProductForm.scss'


const NewProductForm = ({form}) => {
	
	
	return form ? (
		<form className="form">
			<h2 className="form__title">Добавить новый товар</h2>
			<div className="form__input">
				<h3 className="form__input-header">Название товара</h3>
				<input type="text" placeholder='Введите название товара' className="form__input-value"/>
			</div>
			
			<div className="form__input">
				<h3 className="form__input-header">URL изображения</h3>
				<input type="text" placeholder='Введите URL изображения (необязательно)' className="form__input-value"/>
			</div>
			
			<div className="form__input">
				<h3 className="form__input-header">Описание</h3>
				<textarea name="productDescription" cols="30" rows="10" className='form__input-textarea'></textarea>
			</div>
			
			<div className="form__input">
				<h3 className="form__input-header">Тип товара</h3>
				<select name="category" className='form__input-select'>
					<option value="">Выберите категорию</option>
				</select>
			</div>
		</form>
	) : null
}

export default NewProductForm