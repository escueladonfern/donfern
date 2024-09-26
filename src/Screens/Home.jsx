import React from 'react';
import './Home.css';
import Imagenes from '../Img/Imagenes';

const Home = () => {
	return (
		<div className="ini">
			<img src={Imagenes.Home0} alt="" id="Ind0"/>
			<h2>MUEYEPUIN!</h2>
			<img src={Imagenes.Home1} alt="" id="Ind1" />
		</div>
	);
};

export default Home;