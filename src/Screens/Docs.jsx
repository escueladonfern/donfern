import React from 'react';
import Mostrar from '../Mostrar';
import Documentos from '../Pdfs/Documentos';


const info = [
	{id: 1, content:<div className="Contenido">
				<h4>Lista de Cotejo</h4>
				<section className="forma">
					<iframe src={Documentos.Docs0} frameborder="0" title="Lista de Cotejo"></iframe>
				</section>
				<h4>Escala de Estimación</h4>
				<section className="forma">
					<iframe src={Documentos.Docs1} frameborder="0" title="Escala de Estimacion"></iframe>
				</section>
			</div>},
	{id: 2, content:<div className="Contenido">
			<h4>Resumen Estadístico</h4>
				<section className="forma">
					<iframe src={Documentos.Docs2} frameborder="0" title="Resumen Estadistico"></iframe>
				</section>
				<h4>Estadística Mensual</h4>
				<section className="forma">
					<iframe src={Documentos.Docs3} frameborder="0" title="Estadistica Mensual"></iframe>
				</section>
			</div>},
	{id: 3, content: <div>
		<article className="Contenido">
			<h4>Horario</h4>
			<section className="forma">
				<iframe src={Documentos.Docs4} frameborder="0" title="Horario"></iframe>
			</section>
		</article>
		<article className="Contenido">
			<h4>Horario de Musica</h4>
			<section className="forma">
				<iframe src={Documentos.Docs7} frameborder="0" title="Horario_Musica"></iframe>
			</section>
		</article>
	</div>},
	{id:4, content: <div className="Contenido">
			<h4>P.A.</h4>
			<section className="forma">
				<iframe src={Documentos.Docs5} frameborder="0" title="P.A."></iframe>
			</section>
		</div>
	},
	{id:5, content: <div className="Contenido">
			<h4>Ambiente de Aprendizaje</h4>
			<section className="forma">
				<iframe src={Documentos.Docs6} frameborder="0" title="Ambiente de Aprendizaje"></iframe>
			</section>
		</div>
	},
];

const Docs = () => {
	const {contenido, handleClick} = Mostrar(info);
	return (
		<div className="pags">
			<h2>Formatos</h2>
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="Boton0">Instrumentos de Evaluación</li>
				<li key={2} onClick={() => handleClick(2)} className="Boton0">Estadística</li>
				<li key={3} onClick={() => handleClick(3)} className="Boton0">Horarios</li>
				<li key={4} onClick={() => handleClick(4)} className="Boton0">P.A.</li>
				<li key={5} onClick={() => handleClick(5)} className="Boton0">Ambiente de Aprendizaje</li>
			</ul>
			<div>{contenido}</div>
		</div>
	);
};

export default Docs;