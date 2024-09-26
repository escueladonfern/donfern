import React from 'react';
import Mostrar from '../Mostrar';
import Imagenes from '../Img/Imagenes';
// import Pepi1 from './Pepi1';
const info = [
{id: 1, content: <div>
			<article className="Contenido">
				<h4>Diagnostico:</h4>
				<p>La comunidad indígena Cumanagoto de Pueblo Viejo, ubicada en el Municipio Píritu de la Zona Oeste de Anzoátegui, ostenta el mérito de haber sido el lugar donde fue fundada inicialmente el primer Píritu, por Franciscanos y Misioneros, que debido a la sequía y falta de agua estos franciscanos no se establecieron allí. La comunidad Indígena de Pueblo Viejo fue fundada a principios del siglo XIX, conformadas en ese entonces por pocas familias.</p>
			</article>

			<article className="Contenido">
				<h4>Características Geográficas:</h4>
				<p>Es una explanada circular, cubierta de colinas, la cual es un área de gran futuro.</p>
			</article>
			<article className="Contenido">
				<h4>Vías de Comunicación:</h4>
				<p>La comunidad de Pueblo Viejo, tiene tres accesos los cuales están señalizados, una entrada por la vía que viene de Barcelona, otra entrada por la vía que viene de Caracas y la otra por la vía que viene Clarines.</p>
			</article>
			<article className="Contenido">
				<h4>Telecomunicaciones:</h4>
				<p>Uso del servicio de telefonía móvil de la empresa Movistar, cuenta también con los servicios de internet Uplink.</p>
			</article>
			<article className="Contenido">
				<h4>Transporte:</h4>
				<p>Cuenta con un punto de buses, el valor  del pasaje actualmente es de quince bolívares (Bs. 15.00)</p>
			</article>
			<article className="Contenido">
				<h4>Fuentes de Trabajo:</h4>
				<p>Dentro de la comunidad no existe una industria desarrollada, solo micro empresas que son de subsistencia, cuenta también con restaurantes de comidas, donde la mayoría de los habitantes buscan trabajo allí.</p>
				<p>También cuenta con una escuela y tres de sus docentes son habitantes de la comunidad, así como el personal obrero y el personal de cocina.</p>
			</article>
			<article className="Contenido">
				<h4>Educación:</h4>
				<p>Existe en la comunidad una escuela, donde se imparte desde educación inicial hasta primaria, actualmente esta escuela cuenta con 1 director, 8 docentes, 2 coordinadores, 2 especialistas, 2 personal administrativo, 3 obreros, 3 cocineras</p>
			</article>
			<article className="Contenido">
				<h4>Cartografía de la comunidad de Pueblo Viejo:</h4>
				<p>Pueblo Viejo, es un caserio, aldea, localidad, lugar o centro poblado del estado Anzoátegui. Está localizado más o menos 39.3km al oriente de Barcelona (Municipio Simón Bolivar), 5.4km al oriente de Puerto la Cruz (Municipio Sotillo) y 54.4km al oriente de Guanta(Municipio Homónimo), aproximandamente 143 sobre el nivel del mar</p>
			</article>
			<article className="Contenido">
				<h4>Información Geográfica:</h4>
				<p>Coordenadas Geográficas</p>
				<p>Latitud: 10º0`22´</p>
				<p>Longitud: 65º2`4´</p>
				<p>Altura: 143 msnm</p>
				<img src="" />
			</article>
			<article className="Contenido">
				<h4>Lugares Cercanos a Pueblo Viejo:</h4>
				<ol>
					<li>La Mascota 1,0km hacia el norte</li>
					<li>Pica Pica 1,1km hacia el noreste</li>
					<li>El Mango 2,7km hacia el oeste</li>
					<li>La Serranía 3,2km hacía el noreste</li>
					<li>La Medianía 3.6km hacia el sur</li>
					<li>La Asunción 3,7km hacia el oeste</li>
					<li>La Quiarera 3,7km hacia el oeste</li>
					<li>Pajarito 3,9 hacía el sudoeste</li>
				</ol>
			</article>
			<article className="Contenido">
				<h4>Reflexión de las Raíces:</h4>
				<p>Los Cumanagotos eran una etnia de la rama Caribe que vivía en el centro y centro-oriente de Venezuela hasta la costa del mar Caribe al momento en que llegaron los europeos a Sudamérica vivían ante todo en la región que hoy en día es el estado Anzoátegui. Medio siglo atrás los Cumanagotos como colectivos se creían extintos debido a la exigua visibilidad social a la que habían sido sometidos, se pensaba que habían sufrido una transculturización muy fuerte, incluso perdieron su idioma. Es probable que a finales del siglo XX hayan fallecido los últimos habitantes.</p>
				<p>Sin embargo, desde hace 40 años aproximadamente han ido rescatando su visibilidad social y resignificando su propia identidad.</p>
			</article>
			<article className="Contenido">
				<h4>Etnogénesis:</h4>
				<p>Preguntas que fueron hechas al sabio y sabia de la comunidad:</p>
				<p>Narra el señor Mario León Cirilo de 76 años y la señora Nery Cirilo que sus padres vivían en la comunidad de Pica - Pica y es allí donde él nació, y cuando tenía 13 años sus padres se mudan a la comunidad de Pueblo Viejo, que en ese entonces era Píritu, este pueblo surgió por el crecimiento de sus habitantes.</p>
			</article>
			<article className="Contenido">
				<h4>Etnografía:</h4>
				<p>Los rasgos culturales que me caracterizan, al igual que a mis padres y hermanos mayores, me dediqué a la agricultura</p>
			</article>
			<article className="Contenido">
				<h4>Etnohistoria:</h4>
				<p>Mis hermanos mayores cuentan que al llegar aquí a la comunidad de Pueblo Viejo, era un caserío donde no había habitantes, nuestros padres fueron los primeros en habitar estas tierras y de allí fue creciendo la población.</p>
			</article>
			<article className="Contenido">
				<h4>Etnicidad:</h4>
 				<p>En todo pueblo existen creencias, en esta comunidad, creen mucho en el Arcángel San Rafael, patrón de los peregrinos y es por ello que cada 24 de octubre se rinde homenaje. En la comunidad de Pueblo Viejo, existe el mito, que tiempos atrás salía una mujer que asustaba a las personas que en las noches andaba por los montes y que también se escuchaba el llanto de la llorona. El idioma que siempre he conocido es el español, aunque decían mis padres que pertenecemos a la etnia Kariña, que fue tiempo después que se empezó a decir que éramos cumanagotos.</p>
				<p>Los rasgos físicos que tenemos, son rasgos de indigena, así está caracterizada la familia Cirilo como indígenas.</p>
			</article>
		</div>},
{id: 2, content: <div className="Contenido">
					<h4>Cuento de la Comunidad de Pueblo Viejo</h4>
					<p>Cuentan nuestros antepasados que hace años el pueblo donde residiamos era Píritu Antiguo, sin embargo, hubo, una guerra en la que este pueblo fue quemado y de allí quedó el nombre de Pueblo Viejo con una comunidad muy reducida,sus fundadores fuerón las familias Cirilo, Guaina, Aguana, Olivares, Guaicara, Motaban. Y así inicio la construcción de este pueblo hasta el presente.</p>
			</div>},
{id: 3, content: <div className="Contenido">
					<h4>Mermelada de Ciruela</h4>
					<h5>Ingredientes</h5>
					<ol>
						<li>2kg de Ciruela</li>
						<li>1/2 de Azúcar</li>
						<li>1 Cucharada de Vainilla</li>
					</ol>
				<h5>Preparación</h5>
				<p>Se cocina la ciruela y se le saca la semilla, se licúa, se cuela con poca agua hasta que quede espeso, se hace el almibar del azúcar y luego se agrega la ciruela, se bate aproximadamente 2 o 3 horas hasta que esté espeso.</p>
				</div>},
{id: 4, content: <article className="Contenido">
			<h4>Historia de la Ciruela de Huesito</h4>
			<p>La ciruela de huesito se produce en el estado Anzóategui, es reconocida como una de las frutas más deliciosas del país, especificamente Pueblo Viejo tiene en el fruto a un aliado para su economía familiar y sustento diario, se siembra por el tallo y luego esperamos de tres a seís años para recoger sus frutos. Las familias indígenas y sus antepasados vienen transmitiendo su sabíduria sobre el cultivo y comercialización de está fruta.</p>
		</article>},
{id: 5, content: <article className="Contenido">
				<h4>Cuento: la Leyenda la "Enea"</h4>
				<p>El cuento de la Enea era un manantial en el cúal el agua emanaba de tres piedras ubicadas en la montaña.<br/>Cuenta la leyenda que en el lugar cuando las personas iban a la Enea una mujer caminaba detrás y era prohibido matar cualquier animal del lugar porque tenía consecuencias espirituales y físicas como la fiebre. Las personas que antes vivián alrededor del sitio se fueron del lugar por motivos que no se sabe.<br/>En este momento está seco, primero se puso salado y después se secó.</p>
			</article>},
];

const  PepiMenu = () => {
	const {contenido, handleClick} = Mostrar(info);
	return (
		<div id="Pepi">
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="Boton1">Proyecto Educativo por Pueblos Indígenas de la U.E.E.R Don Fernando de Peñalver</li>
				<li key={2} onClick={() => handleClick(2)} className="PortList"><img src="https://i.postimg.cc/1tD1MhBB/Cuent0.png" alt="" className="Port" /></li>
				<li key={3} onClick={() => handleClick(3)} className="PortList"><img src="https://i.postimg.cc/44zXQtFG/Cuent1.png" alt="" className="Port" /></li>
				<li key={4} onClick={() => handleClick(4)} className="PortList"><img src="https://i.postimg.cc/mDPyGBJ3/Cuent2.png" alt="" className="Port" /></li>
				<li key={5} onClick={() => handleClick(5)} className="PortList"><img src="https://i.postimg.cc/SsH7SHbB/Cuent3.png" alt="" className="Port" /></li>
			</ul>
			<article>{contenido}</article>
		</div>
		);
};
export default PepiMenu;