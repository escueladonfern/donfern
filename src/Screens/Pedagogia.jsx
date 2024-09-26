import React from 'react';
import Mostrar from '../Mostrar';
import Videos from '../Videos/Videos';
import Documentos from '../Pdfs/Documentos';

const info = [
	{id:1, content: ""},
	{id:2, content: <article className="Contenido">
		<h3>Calendario Escolar 2024-2025</h3>
		<section className="forma">
			<iframe src={Documentos.Peda0} frameborder="0" title="Escala de Estimacion"/>
		</section>
	</article>},
];
const Pedagogia = () => {
	const {contenido, handleClick} = Mostrar(info);
	return (
		<div id="Peda" className="pags">
			<h2>Pedagogia</h2>
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="Boton0">Brigadas</li>
				<li key={2} onClick={() => handleClick(2)} className="Boton0">Calendario Escolar</li>
			</ul>
			<article>{contenido}</article>
			<article className="Contenido">
				<h3>Planificación Escolar 2024-2025</h3>
				<section className="forma">
					<iframe src={Documentos.Peda1} frameborder="0" title="Escala de Estimacion"/>
				</section>
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/L60rnh5d/IMG-20240905-WA0027.jpg" alt="." title="."/> 
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/nrQ2wV45/Que-Es-Una-Maestra.jpg" alt="." title="."/> 
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/1tXJwrfy/Inicio-Ciclo-Escolar.jpg" alt="." title="." /> 
			</article>	
			<article className="Contenido">
				<img src="https://i.postimg.cc/15RnH9Q3/Formas-Diferentes-Evaluar-Alumnos.jpg" alt="." title="."/> 
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/tCr1vLqt/Pensamiento-Critico-Aula.jpg" alt="." title="."/> 
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/GpjWHhRT/unnamed.jpg" alt="." title="."/>
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/9Qy5HYNp/unnamed-1.jpg" alt="." title="."/>
			</article>
			<article className="Contenido">
				<img src="https://i.postimg.cc/yNBq13Mz/unnamed-2.jpg" alt="." title="."/>			
			</article>
			<article className="Contenido">
				<video src={Videos.Peda0} alt="." title="." controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda1} alt="." title="." controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda2} alt="." title="." controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda3} alt="." title="." controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda4} controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda5} controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda6} controls></video>
			</article>
			<article className="Contenido">
				<video src={Videos.Peda7} controls></video>
			</article>
		</div>
	);
};

export default Pedagogia;