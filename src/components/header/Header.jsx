import './header.scss'
import { CirclePlus } from 'lucide-react';

const Header = ({onToggleForm}) => {
	return (
		<>
			<div className="container">
				<h1 className='header'>Менеджер товаров</h1>
				<div className="header__buttons">
					<button
						onClick={onToggleForm}
						className='header__buttons-add'>
						<CirclePlus size={20}/>
						Добавить новый товар
					</button>
				</div>
			</div>
		</>
	)
}

export default Header