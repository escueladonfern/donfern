import React from 'react';
import Mostrar from '../Mostrar';
import Videos from '../Videos/Videos';

const info = [
	{
		id:1, content: <div>
			<h3>Himno Nacional</h3>
			<article className="Contenido">
				<video src={Videos.SimbPatr0} controls></video>
			</article>		
			<h3>Letra</h3>
			<article className="Contenido">	
				<h4>CORO</h4>
				<p>Gloria al bravo pueblo</p>
				<p>que el yugo lanzó,</p>
				<p>la ley respetando,</p>
				<p>la virtud y honor.(Bis)</p>
				<h4>I</h4>
				<p>¡Abajo cadenas!(Bis)</p>
				<p>gritaba el señor,(Bis)</p>
				<p>y el pobre en su choza</p>
				<p>libertad pidió.</p>
				<p>A este santo nombre(Bis)</p>
				<p>tembló de pavor</p>
				<p><i>el vil egoísmo</i></p>
				<p><i>que otra vez triunfó.</i>(Bis)</p>
				<h4>CORO</h4>
				<h4>II</h4>
				<p><i>Gritemos con brío:</i> (Bis)</p>
				<p><i>¡Muera la opresión!</i> (Bis)</p>
				<p><i>Compatriotas fieles,</i></p>
				<p><i>la fuerza es la unión</i></p>
				<p><i>y desde el Empíreo  (Bis)</i></p>
				<p><i>el Supremo Autor</i></p>
				<p><i>un sublime aliento</i></p>
				<p><i>al pueblo infundió.</i>(Bis)</p>
				<h4>CORO</h4>
				<h4>III</h4>
				<p><i>Unida con lazos</i>(Bis)</p>
				<p><i>que el cielo formó,</i>(Bis)</p>
				<p><i>la América toda</i></p>
				<p><i>existe en Nación;</i></p>
				<p><i>y si el despotismo (Bis)</i></p>
				<p><i>levanta la voz,</i></p>
				<p><i>seguid el ejemplo</i></p>
				<p><i>que Caracas dió.</i>(Bis)</p>
				<h4>CORO</h4>
			</article>
		</div>
	},
	{
		id:2, content: <div>
			<h3>Himno Estatal</h3>
			<article className="Contenido">
				<video src={Videos.SimbPatr1} controls></video>
			</article>
			<h3>Letra</h3>
			<article className="Contenido">		
				<h4>CORO</h4>
				<p>Ayer fuiste pujante y altiva,</p>
				<p>En la lucha sangrienta y tenaz;</p>
				<p>más ya, patria te ciñes la oliva;</p>
				<p>y hoy tu gloria se funda en la paz. (Bis)</p>
				<h4>I</h4>
				<p>¡Patria ilustre! tus hijos recuerdan</p>
				<p>con orgullo la trágica lucha:</p>
				<p>¡aún parece que en torno se escucha</p>
				<p>el tremendo rugir del cañón! (Bis)</p>
				<p>Fue la prueba temible tan larga,</p>
				<p>que la sangre a torrentes vertiste,</p>
				<p>y en la homérica lid te creciste,</p>
				<p>esforzando el marcial corazón.</p>
				<h4>II</h4>
				<p>En los brazos de insignes guerreros,</p>
				<p>Con Anzoátegui, Freites, Monagas,</p>
				<p>arrasaste las bélicas plagas</p>
				<p>y te erguiste triunfante doquier;</p>
				<p>En la liza feral y gloriosa</p>
				<p>Contra Iberia de heroica porfía,</p>
				<p>tuya fue la postrer bizarría;</p>
				<p>tuya fue la victoria postrer. (Bis)</p>
				<h4>CORO</h4>
			</article>		
		</div>
	},
	{
		id: 3, content: <div>
			<h3>Árbol Nacional</h3>
			<img src="https://i.postimg.cc/g06qHDM3/Araguaney-1-dibujo.jpg" alt="" title=""/>
			<p className="Contenido">El Araguaney (Tebehuia Chrisantha) fue 
			declarado Árbol Nacional de Venezuela el 29 de Mayo de 1948, por 
			el entonces presidente Rómulo Gallegos.<br/><br/>Esta especie autóctona 
			presenta su floración entre los meses de febrerob y abril, su altura 
			oscila entre 6 y 12 metros y unos 60 centímetros de diámetro.<br/><br/>
			Tiene el don de crecer en cualquier suelo por ser una especie fuerte,
			inclusive en aquellos que son pobres en sustancias orgánicas.<br/><br/>
			El árbol nacional, florece en campos, llanos, montañas, selvas y 
			sábanas, tierras cálidas, frías y áridas, es verde durante casi todo 
			el año pero por unos pocos días se cubre de amarillo al nacer sus 
			flores.<br/><br/>Su floración, que deja una alfombra de flores 
			amarillas, así como su fructificación, se produce durante la época 
			seca.<br/><br/>Dato curioso: este árbol es conocido como Araguaney en
			Venezuela, Guayacán en Ecuador, Perú y Panamá, Guayacán amarillo o 
			Cañahuate en Colombia, Lapacho amarillo en Argentina y Paraguay y 
			Tajibo en Bolivia.<br/><br/>Además, su madera es considerada como una
			 de las más duras y pesadas en los neutropicos.<br/><br/>Es difícil de
			 cepillar y cortar durable y muy resistente a las termitas y el agua 
			 salada.</p>
		</div>
	},
	{
		id: 4, content: <div>
			<h3>Flor Nacional</h3>
			<img src="https://i.postimg.cc/mgny9qSb/Cmossiaecoerulea-IMG-6383.jpg" alt="" title="" />
			<p className="Contenido">La orquídea (Cattleya mossiae), fue declarada
			 el 23 de mayo de 1951, por decreto oficial, como la Flor Nacional.<br/>
			<br/>Es originaria de la Cordillera de Costa y también es conocida 
			como “Flor de mayo” debido a que esta es utilizada en las 
			tradicionales celebraciones para adornar la “Cruz de Mayo”.<br/><br/>
			La Orquídea venezolana es la flor con mayor número de bellas y 
			variadas especies en el reino vegetal, es una planta epífita que se 
			distribuye por todo el territorio venezolano.<br/><br/>La 
			característica principal de las orquídeas venezolanas son sus flores,
			 que destacan por un hermoso color púrpura, lila, rosado o blanco.<br/>
			<br/>Al igual que otras especies de orquídeas, posee un labelo, dos
			 pétalos y tres sépalos; su floración se suele dar a principios de
			 mayo o abril, la cual expone el labelo, atrayendo a los
			 polinizadores hacia ella (abejas, avispas, moscas).</p>
		</div>
	},
	{
		id: 5, content: <div>
			<h3>Animal Nacional</h3>
			<img src="https://i.postimg.cc/SsFLTM53/Curacao-Icterus-Icterus-2013.jpg" alt="" title="" />
			<p className="Contenido">El turpial (Icterus icterus) fue elegida Ave 
			Nacional en un concurso auspiciado por la Sociedad Venezolana de 
			Ciencias Naturales, y oficialmente declarada el 23 de mayo de 1958 por 
			la Junta de Gobierno presidida por Wolfgang Larrazábal.<br/><br/>
			El turpial venezolano es una especie de ave paseriforme de la familia
			Icteridae endémica del norte de América del Sur. Es un pájaro pequeño,
			que mide entre 15 y 22 cm, tiene la cabeza y las alas de color negro y
			el resto del cuerpo amarillo.<br/><br/>El período de apareamiento 
			tiene lugar entre los meses de marzo y septiembre. El turpial 
			venezolano no construye nidos para incubar sus huevos, en cambio
			invade nidos que hayan sido abandonados, aunque también es común que
			tome posesión del nido a la fuerza, con la expulsión agresiva de sus
			ocupantes.<br/><br/>Una vez que haya un sitio para vivir y alimentar
			a sus crías, el turpial defiende fieramente su territorio, de manera que 
			puede llegar a devorar los huevos o incluso las crías de otras aves que
			osen tratar de ocupar su vivienda. En cada puesta, el turpial deposita de
			3 a 4 huevos, que eclosionan al cabo de dos semanas de incubación.</p>
		</div>
	},
];

const SimbolosPatrios = () => {
	const {contenido, handleClick} = Mostrar(info);
	return(
		<div className="pags">
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="Boton0">Himno Nacional</li>
				<li key={2} onClick={() => handleClick(2)} className="Boton0">Himno Estado Azoátegui</li>
				<li key={3} onClick={() => handleClick(3)} className="Boton0">Árbol Nacional</li>
				<li key={4} onClick={() => handleClick(4)} className="Boton0">Flor Nacional</li>
				<li key={5} onClick={() => handleClick(5)} className="Boton0">Animal Nacional</li>
			</ul>
			<article>{contenido}</article>
		</div>
	);
};

export default SimbolosPatrios;