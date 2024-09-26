import React from 'react';
import Mostrar from '../Mostrar';
import CalenCumaMenu from '../Components/CalenCumaMenu';
import Cuentos from '../Components/Cuentos';
import Recetas from '../Components/Recetas';

const info = [
{id: 1, content: <CalenCumaMenu/>},
{id: 2, content: <Cuentos/>},
{id: 3, content: <div><h3>Himno Nacional en lengua Kumanagoto</h3><div className="Contenido">
	<h4>Coro</h4>
	<p>Copey terac patar<br/>Tabiroche quematez<br/>Guamana guapo<br/>Puquete diope<br/>(Bis)</p>
	<h4>I</h4>
	<p>Yebchaca Pracon(Bis)<br/>Tuntari diope(Bis)<br/>Tequiche mamuec canca<br/>Canare capuec<br/>Eti santotecher<br/>Iglepia machi tee,<br/>terpure mazpe<br/>Amna metare tez<br/>Eti santotecher(Bis)<br/>Iglepia machi tee,<br/>Terpure mazpe<br/>Amna metare tez,<br/>Terpure mazpe<br/>Amna metare tez.</p>
	<h4>II</h4><p>Arenmique Tuare(Bis)<br/>Tutanze irobcar(Bis)<br/>Enecpenani pocomano<br/>Ipuecmac ocotmac<br/>Ayamaca yao<br/>Queryzen cape<br/>Pache pachete<br/>Patar tumachen<br/>Ayamaca yao(Bis)<br/>Queryzen cape<br/>Pache pachete<br/>Patar tumachen<br/>Pache pachete<br/>Patar tumachen</p>
	<h4>III</h4>
	<p>Itub Tuymeque(Bis)<br/>Capio guazeti(Bis)<br/>América temere<br/>Reuney yao pore<br/>Quere yao mazpano<br/>Quere mamuec quiza<br/>Azama naz eyepato<br/>Caracas guaz eti<br/>Quere yao mazpano(Bis)<br/>Quere mamuec quiza<br/>Azama naz eyepayo<br/>Caracas guaz eti<br/>Azama naz eyepato<br/>Caracas guaz eti</p>
	</div></div>},
{id: 4, content: <Recetas />},
{id: 5, content: <div><h3>Diccionario Kumanagoto</h3>
	<p className="Contenido">Maíz Tierno = Jojoto</p>
	<p className="Contenido">Ají = Heres</p>
	<p className="Contenido">Mazamorra = Cutani</p>
	<p className="Contenido">Carato de Yuca = Capeno/Mazano</p>
	<p className="Contenido">Carato de Maíz = Yuche</p>
	<p className="Contenido">Agua = Tuna</p>
	<p className="Contenido">Leche = Manatiecur</p>
	<p className="Contenido">Jugo = Uroquian</p>
	<p className="Contenido">Bebida = Gaucurce</p>
	<p className="Contenido">Huevo = Camuy</p>
	<p className="Contenido">Carne = Mun</p>
	<p className="Contenido">Arepa de Maíz = pureta</p>
	<p className="Contenido">Caldo/Sopa = Cecue</p>
	<p className="Contenido">Asado = Tupoche</p>
	<p className="Contenido">Cacao = Ipuerte</p>
	<p className="Contenido">Guayaba = Guarapa</p>
	<p className="Contenido">Mandarina = Chepes</p>
	<p className="Contenido">Cambur = Enquineya</p>
	<p className="Contenido">Pimentón = Pomuey</p>
	<p className="Contenido">Aguacate = Daucua</p>
	<p className="Contenido">Platano = Yaguara</p>
	<p className="Contenido">Auyama = Characo</p>
	<p className="Contenido">Patilla = Tamuche</p>
	<p className="Contenido">Piña = Onore</p>
	<p className="Contenido">Jobo = Marapa</p>
	</div>},
];

const Kumanagotos = () => {
	const {contenido, handleClick} = Mostrar(info);
	return (
		<div className="pags">
			<h2>Kumanagotos</h2>
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="Boton0">Calendario Socioproductivo Cultural del Pueblo Cumanagoto</li>
				<li key={2} onClick={() => handleClick(2)} className="Boton0">Cuentos</li>
				<li key={3} onClick={() => handleClick(3)} className="Boton0">Himno Nacional en Kumanagoto</li>
				<li key={4} onClick={() => handleClick(4)} className="Boton0">Recetas</li>
				<li key={5} onClick={() => handleClick(5)} className="Boton0">Diccionario Kumanagoto</li>
			</ul>
			<div>{contenido}</div>
		</div>
	);
};

export default Kumanagotos;