import React from 'react';
import './Header_Footer.css';
import {Link} from 'react-router-dom';
import Imagenes from '../Img/Imagenes';

const links = [
	{
		name: 'Inicio',
		href: '/',
	},
	{
		name: 'Somos',
		href: '/Somos',
	},
	{
		name: 'CLIF',
		href: '/CLIF',
	},
	{
		name: 'Pedagogia',
		href: '/Pedagogia',
	},
	{
		name: 'Formatos',
		href: '/Docs',
	},
	{
		name: 'CRA',
		href: '/CRA',
	},
	{
		name: 'Kumanagotos',
		href: '/Kumanagotos',
	},
	{
		name: 'Simbolos Patrios',
		href: '/SimbolosPatrios',
	},
];	

const Header = () => {
	return (
			<header>
				<img src={Imagenes.Header} alt="" title="" id="Logo" />
				<input type="checkbox" id="check"/>
				<label for="check" id="Check">
					<section class="checkM"></section>
					<section class="checkM"></section>
					<section class="checkM"></section>
				</label>
				<nav>
					{links.map((x) => (
						<Link className="link" to={x.href}> {x.name} </Link>
					))}
				</nav>
			</header>
		);
};
export default Header;