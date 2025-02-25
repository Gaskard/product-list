import './header.scss'
import { CirclePlus } from 'lucide-react';

function Header() {
	return (
		<>
			<div className="container">
				<h1 className='header'>Менеджер товаров</h1>
				<div className="header__buttons">
					<button className='header__buttons-add'>
						<CirclePlus size={20} className="mr-2" />
						Добавить новый товар
					</button>
				</div>
			</div>
		</>
	)
}

export default Header