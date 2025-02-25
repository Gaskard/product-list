

const NewProductForm = () => {
	
	
	
	return (
		<form className="form">
			<h2 className="form__title">Добавить новый товар</h2>
			<div className="form__input-wrapper">
				<h2 className="form__input-header">Название товара</h2>
				<input type="text" placeholder='Введите название товара' className="form__input"/>
			</div>
			
			<div className="form__input-wrapper">
				<h2 className="form__input-header">URL изображения</h2>
				<input type="text" placeholder='Введите URL изображения (необязательно)' className="form__input"/>
			</div>
			
			<div className="form__input-wrapper">
				<h2 className="form__input-header">Описание</h2>
				<textarea name="productDescription" cols="30" rows="10" className='form__input-textarea'></textarea>
			</div>
			
			<div className="form__input-wrapper">
				<h2 className="form__input-header">Тип товара</h2>
				<select name="category" className='form__input-select'>
					<option value="">Выберите категорию</option>
				</select>
			</div>
		</form>
	)
}

export default NewProductForm