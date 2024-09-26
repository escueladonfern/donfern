import React from 'react';
import Mostrar from '../Mostrar';
import './Screens.css';
import Organigrama from '../Img/Organigrama.svg';
import Documentos from '../Pdfs/Documentos';
import PepiMenu from '../Components/PepiMenu';

const info = [
	{id: 1, content: <img src={Organigrama} alt="Organigrama" title="Organigrama" id="orga" />},
	{id: 2, content: <div>
			<h3>Reseña histórica de la U.E.R Don Fernándo de Peñalver. </h3>
			<p className="Contenido">Pueblo Viejo es una comunidad de cultura, historia 
			y tradición donde fue la primera fundación de Píritu hace más de 500 años 
			con ese tiempo de historia, la primera edificación de la escuela, es la 
			actual casa de la familia Aguana Domínguez, quienes hasta la fecha del año 
			2024 aún habitan la comunidad, luego según datos relatados por el señor 
			Fernando Aguana, nativo de la comunidad de Pueblo Viejo, se inicia las 
			actividades de la escuela en  la actual casa del señor Andrés Guaina, y 
			para ese entonces pertenecía aún al NER 040 del municipio Peñalver y llevaba
			por nombre: "Escuela Pueblo Viejo", para  la fecha 23 de octubre del año 1978,
			datos aportados por el profesor Ventura Curupe,  comenta que: "el otroro Alcalde
			  del municipio Peñalver, Doctor Edgar celestino Guaita, ordena la construcción 
			  de una R1 con dotación de mobiliario y baño con dependencia administrativa del 
			  NER 040, esto debido a que Pueblo Viejo pertenecía para ese entonces al municipio 
			  Peñalver". Siendo designado como  director del NER 040 el profesor Pedro Garcia 
			  Rondón, para el mes de octubre de ese mismo año, designa como maestra titular de 
			  1ero a 3er grado a la Docente Pilar Espinoza de Noriega, oriunda de Barcelona, 4 
			  años más tarde, en el año 1982,  luego del traslado de la maestra a la ciudad de 
			  Barcelona fue sustituida por el maestro Rosendo Brito Marcano, continuando como 
			  Director Pedro Garcia Rondón, quién designa al maestro Eduardo Parao como docente 
			  de 4to y 5to grado. En el  1985 trasladan al maestro Rosendo Brito Marcano a la 
			  ciudad de Puerto la Cruz y lo sustituye la maestra Lourdes Jiménez de Mongua  
			  quién provenía de la escuela  los Barrancones NER 552 y asume como Director del 
			  NER 040 el profesor José Rafael Hernández quién dura poco en su cargo, ya que es 
			  ascendido a Supervisor en la Zona Educativa y lo sustituye el profesor Amilcar 
			  Rodríguez Siso.<br/><br/>Para el año 1993 el maestro Eduardo Parao es 
			  trasladado a la zona de Bergantin y lo sustituye en su cargo el Msc 
			  Ventura Ramón Curupe, quién provenía de la E.E.R " Los Ranchos,NER 552, 
			  para que se encargará de los grados superiores 4,5 y 6to grado, luego 
			  para el 1999 es jubilada la maestra Lourdes Jimenez de Mongua y la 
			  sustituye el maestro José Cirilo.<br/><br/>Para el año 2002 por su 
			  crecimiento poblaciomal, se les concede la credencial de Docente al 
			  Licenciado Julio Carao, al Msc José Luis Guareguan y a la   maestra Ofelia
			   Hernández, para ese momento el  profesor Edwin Parababire se 
			   encontraba como Director de la institución.<br/><br/>Para el año 2003 el 
			   Director de Educación del Estado, profesor Jesús Olivier desincorpora a 
			   la Escuela Estadal Concentrada Pueblo Viejo del NER 040 y designa como 
			   directora a la profesora Magaly Guareguan, quién para el año 2004 en 
			   Consejo de Docentes, con la aprobación unánime de todos los presentes le
			    cambian la nomenclatura a la escuela que paso a llamarse "Escuela Rural
			     Estadal Don Fernándo de Peñalver", como un sincero homenaje a este 
			     héroe piriteño que en tiempos de la Independencia fue secretario y 
			     consejero del Libertador  Simón Bolívar, además de ser firmante del 
			     acta de la Independencia el 5 de Julio 1811.<br/><br/>La modalidad de 
			     educación inicial, en sus inicios comenzó a funcionar en una casita de 
			     barro y bahareque, muy cercana a la infraestructura del plantel con el 
			     que contamos en la actualidad, con una matrícula de 18 estudiantes, 
			     siendo la maestra, la fallecida Celenia Cirilo y como auxiliar estuvo a 
			     cargo Liliana Ytriago, hasta que años más;tarde para el 2004,  FEDE, 
			     construye en el propio patio de la escuela primaria, el aula en la que 
			     actualmente funciona el preescolar y asumen la docente Reina Parucho de 
			     Núñez y la auxiliar Maribel Rivero.<br/><br/>Para el año 2005 la profesora 
			     Magaly Guareguan es sustituida de su cargo por la Msc. Amarilys Guareguan, 
			     luego en el año 2008, es designada como Directora la Licenciada Emilia Zamora 
			     quién permaneció en su cargo 5 años para luego, en el año 2012 ser sustituida 
			     por la Licenciada Onomaris Canache, seguidamente en el 2013,  la  Msc. Dorsy 
			     Antonia Contreras de Sifontes, toma las directrices del plantel hasta el año 
			     escolar 2022- 2023.<br/><br/>Nuestro plantel educativo, a principios  de 
			     noviembre del año escolar 2023-2024, queda bajo dirección del Licenciado 
			     Julio Carao, a la espera de la designación de un nuevo gerente.<br/><br/>El 
			     06 de Junio de 2024, es la  MSC. Egdilyn Rojas de Carrera,  quién asume la 
			     dirección de la UEER Don Fernando de Peñalver, contando con un personal 
			     excepcional, con vocación de servicio y sentido de pertenencia, es así, 
			     como en la actualidad nuestra prestigiosa casa de estudios se encuentra 
			     contribuyendo a la formación del nuevo ciudadano que requiere nuestra Patria.</p>
		</div>},
{id: 3, content:<div>
			<div className="Contenido">
				<h4>Coro</h4>
				<p>Nuestras voces hoy se elevan erguidas<br/>Vibra mi alma y rebosa de saber<br/>Porque hoy honro a mi escuela querida<br/>Don Fernando de Peñalver</p>
			</div>
			<div className="Contenido">
				<h4>I</h4>
				<p>Nuestra escuela de educación primaria<br/>Es emblema de superación<br/>Donde crecen bellos ideales<br/>De los niños de esta gran nación<br/>En tus aulas, al cálido regaso,<br/>Encendiendo la antorcha del saber, <br/>A tus hijos en fraternal abrazo,<br/>Los conduces a la luz y el deber</p>
			</div>
			<div className="Contenido">
				<h4>II</h4>
				<p>Mi maestro se esmera victorioso<br/>Es ejemplo leal a seguir<br/>Es su luz que nos guía al encuentro<br/>Del progreso por nuestro por venir<br/>Oh, mi escuela que luces imponente<br/>Hoy te yergues mirando el cenit<br/>Cuando ya de tus aulas yo me ausante<br/>Tu legado lo llevaré en mí</p>
			</div>
		</div>},
{id: 4, content: <PepiMenu/>},
{id: 5, content: ""},
{id: 6, content: <div className="Contenido"><h5>Acuerdos de Convivencia</h5><section className="forma"><iframe title="" src={Documentos.Somos0}></iframe></section></div>},
];
const Somos = () => {
	const {contenido, handleClick} = Mostrar(info);
	
	return (
		<div className="pags">
			<h2>Somos</h2>
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="Boton0">Organigrama</li>
				<li key={2} onClick={() => handleClick(2)} className="Boton0">Reseña Historica</li>
				<li key={3} onClick={() => handleClick(3)} className="Boton0">Himno Escolar</li>
				<li key={4} onClick={() => handleClick(4)} className="Boton0">P.E.P.I</li>
				<li key={5} onClick={() => handleClick(5)} className="Boton0">P.E.I.C</li>
				<li key={6} onClick={() => handleClick(6)} className="Boton0">Acuerdos de Convivencia</li>
				
			</ul>
			<div>{contenido}</div>
		</div>
	);
};

export default Somos;