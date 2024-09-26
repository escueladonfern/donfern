import React from 'react';
import Documentos from '../Pdfs/Documentos';

const CLIF = () => {
	return (
		<div className="pags">
			<h2>Centro Local de Información y Formación</h2>
			<div className="Contenido">
				<h4>Cuadernillo de Orientaciones Para Construccion Del Pepi</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF0} frameborder="0" title="Cuadernillo de Orientaciones Para Construccion Del Pepi"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Orientaciones Para El Desarrollo Curricular</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF1} frameborder="0" title="Orientaciones Para El Desarrollo Curricular"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Matematica Para La Vida - Prof. Rosa Becerra</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF2} frameborder="0" title="Matematica Para La Vida - Prof. Rosa Becerra"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Cuaderno 1</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF3} frameborder="0" title="Cuaderno 1"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Cuaderno 2</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF4} frameborder="0" title="Cuaderno 2"></iframe>
				</section>	
			</div>
			<div className="Contenido">
				<h4>Cuaderno 3</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF5} frameborder="0" title="Cuaderno 3"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Guía Docente - Plan Estrategioco Temporal para el Fortalecimiento de los Aprendizajes en la Educacion Primaria</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF6} frameborder="0" title="Guía Docente - Plan Estrategioco Temporal para el Fortalecimiento de los Aprendizajes en la Educacion Primaria"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Laboratorio de la Calidad Educativa - Prof. Lenin Romero</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF7} frameborder="0" title="Laboratorio de la Calidad Educativa - Prof. Lenin Romero"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>La Gestion Curricular el Plan Estrategico Temporal</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF8} frameborder="0" title="La Gestion Curricular el Plan Estrategico Temporal"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Liderazgo</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF9} frameborder="0" title="Liderazgo"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Materiales Lengua</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF10} frameborder="0" title="Materiales Lengua"></iframe>
				</section>
			</div>
			<div className="Contenido">
				<h4>Plan Nacional - Semillero Científico</h4>
				<section className="forma">
					<iframe src={Documentos.CLIF11} frameborder="0" title="Plan Nacional - Semillero Científico"></iframe>
				</section>
			</div>
		</div>
	);
};

export default CLIF;