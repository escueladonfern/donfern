import React from 'react';
import Mostrar from '../Mostrar';
import Imagenes from '../Img/Imagenes';

const info = [
	{id: 1, content: <div className="Contenido">
		<h3>Enero</h3>
		<h4>Caza: conejo, venado</h4>
		<img src="https://i.postimg.cc/v8z2VLg0/calen1-2.jpg" alt="" title=""/>
		<h4>Limpieza del terreno para la siembra</h4>
		<img src="https://i.postimg.cc/kMBfhVTc/calen1-3.jpg" alt="" title=""/>
	</div>},
	{id: 2, content: <div className="Contenido">
		<h3>Febrero</h3>
		<h4>Limpieza del terreno para la siembra</h4>
		<img src="https://i.postimg.cc/xdpLK5VS/calen2-2.jpg" alt="" title=""/>
		<h4>Caza: conejo, pescado, iguana, guacharaca</h4>
		<img src="https://i.postimg.cc/HkpMRRpg/calen2-3.jpg" alt="" title=""/>
	</div>},
	{id: 3, content: <div className="Contenido">
		<h3>Marzo</h3>
		<h4>Caza: morrocoy, iguana, cachicamo, loro</h4>
		<img src="https://i.postimg.cc/T1Jwc25W/calen3-2.jpg" alt="" title=""/>
		<h4>Limpieza del terreno para la siembra</h4>
		<img src="https://i.postimg.cc/TYYxLJ09/Calen3-3.jpg" alt="" title=""/>
	</div>},
	{id: 4, content: <div className="Contenido">
		<h3>Abril</h3>
		<h4>Comienzo de la cocecha: mango, cambur, limon, yuca, ciruela, chaco, leche</h4>
		<img src="https://i.postimg.cc/c4jzxRb6/calen4-2.jpg" alt="" title=""/>
		<h4>Se hace queso</h4>
		<img src="https://i.postimg.cc/X7Xh6HxT/calen4-3.jpg" alt="" title=""/>
	</div>},
	{id: 5, content: <div className="Contenido">
		<h3>Mayo</h3>
		<h4>Comienzo de la cocecha: mango, maíz, parchita, ciruela, chaco</h4>
		<img src="https://i.postimg.cc/wvT2cMGS/calen5-1.jpg" alt="" title=""/>
		<h4>Comienzan las lluvias</h4>
		<img src="https://i.postimg.cc/mD1QL9zN/Calen5-2.jpg" alt="" title=""/>
		<h4>Se elige a la princesa cumanagoto</h4>
		<img src="https://i.postimg.cc/8Cbw6MtR/calen5-3.jpg" alt="" title=""/>
	</div>},
	{id: 6, content: <div className="Contenido">
		<h3>Junio</h3>
		<h4>Lluvias Fuertes</h4>
		<img src="https://i.postimg.cc/FK7SpSZ5/Calen6-1.jpg" alt="" title=""/>
		<h4>Siembra</h4>
		<img src="https://i.postimg.cc/bw4d9BF8/calen6-2.jpg" alt="" title=""/>
		<h4>Caza de Teretere</h4>
		<img src="https://i.postimg.cc/tgPJSNL6/calen6-3.jpg" alt="" title=""/>
	</div>},
	{id: 7, content: <div className="Contenido">
		<h3>Julio</h3>
		<h4>Lluvias Fuertes</h4>
		<img src="https://i.postimg.cc/FK7SpSZ5/Calen6-1.jpg" alt="" title=""/>
		<h4>Siembra</h4>
		<img src="https://i.postimg.cc/jdDr2FnM/Calen7-1.jpg" alt="" title=""/>
		<h4>Caceria</h4>
		<img src="https://i.postimg.cc/c4ySTNdF/calen7-3.jpg" alt="" title="" className="Calen"/>
	</div>},
	{id: 8, content: <div className="Contenido">
		<h3>Agosto</h3>
		<h4>Cosecha de Frijol: Caraota. Maíz, Chicharro</h4>
		<img src="https://i.postimg.cc/SR7kCZYS/calen8-2.jpg" alt="" title=""/>
		<h4>Caza</h4>
		<img src="https://i.postimg.cc/vTdG1RB2/calen8-3.png" alt="" title="" className="Calen"/>
	</div>},
	{id: 9, content: <div className="Contenido">
		<h3>Septiembre</h3>
		<h4>Cosecha de: Maíz, Yuca, Cambur, Auyama, Patilla, Ají</h4>
		<img src="https://i.postimg.cc/CxCkdYxX/calen9-3.jpg" alt="" title=""/>
		<h4>Ritual de la serpiente Equeyma</h4>
		<img src="https://i.postimg.cc/52tQ9zDY/Calen9-1.jpg" alt="" title=""/>
	</div>},
	{id: 10, content: <div className="Contenido">
		<h3>Octubre</h3>
		<h4>Comienzo de la cosecha de Maya</h4>
		<img src="https://i.postimg.cc/3NnrzS8L/Calen10-3.jpg" alt="" title=""/>
	</div>},
	{id: 11, content: <div className="Contenido">
		<h3>Noviembre</h3>
		<h4>1 de Noviembre: Día de los Ángeles</h4>
		<img src="https://i.postimg.cc/RZcfrGd0/Calen11-1.jpg" alt="" title=""/>
		<h4>1 de Noviembre: Día de los Muertos</h4>
		<img src="https://i.postimg.cc/4NcHtwr1/Calen11-2.jpg" alt="" title=""/>
		<h4>2 de Noviembre: Día de los Ancestros que Bajan de la Montaña</h4>
		<img src="https://i.postimg.cc/DwdWp0fJ/Calen11-3.jpg" alt="" title=""/>
		<h4>18 de Noviembre: Día de la Alimentación</h4>
		<img src="https://i.postimg.cc/DZm8zcrL/Calen11-4.jpg" alt="" title=""/>
	</div>},
	{id: 12, content: <div className="Contenido">
			<h3>Diciembre</h3>
			<h4>Se comparte comida con los familiares</h4>
			<img src="https://i.postimg.cc/3xPrMDhH/Calen12-1.jpg" alt="" title=""/>
	</div>},
];

const CalenCumaMenu = () => {
	const {contenido, handleClick} = Mostrar(info);
	return (
		<div id="Calen" className="pags">
			<h3>Calendario Socioproductivo Cultural del Pueblo Cumanagoto</h3>
			<ul>
				<li key={1} onClick={() => handleClick(1)} className="PortList"><img src="https://i.postimg.cc/rFrx5qzQ/Calen1.png" alt="Boton" className="Port"/></li>
				<li key={2} onClick={() => handleClick(2)} className="PortList"><img src="https://i.postimg.cc/DwVbD2y3/Calen2.png" alt="Boton"  className="Port"/></li>
				<li key={3} onClick={() => handleClick(3)} className="PortList"><img src="https://i.postimg.cc/KYfkRB7m/Calen3.png" alt="Boton"  className="Port"/></li>
				<li key={4} onClick={() => handleClick(4)} className="PortList"><img src="https://i.postimg.cc/vBm19TXf/Calen4.png" alt="Boton"  className="Port"/></li>
				<li key={5} onClick={() => handleClick(5)} className="PortList"><img src="https://i.postimg.cc/q746Jj3m/Calen5.png" alt="Boton"  className="Port"/></li>
				<li key={6} onClick={() => handleClick(6)} className="PortList"><img src="https://i.postimg.cc/rwSt2vK0/Calen6.png" alt="Boton"  className="Port"/></li>
				<li key={7} onClick={() => handleClick(7)} className="PortList"><img src="https://i.postimg.cc/NjXDKsjd/Calen7.png" alt="Boton" className="Port"/></li>
				<li key={8} onClick={() => handleClick(8)} className="PortList"><img src="https://i.postimg.cc/4NssLdr9/Calen8.png" alt="Boton" className="Port"/></li>
				<li key={9} onClick={() => handleClick(9)} className="PortList"><img src="https://i.postimg.cc/8zCDGYkk/Calen9.png" alt="Boton" className="Port"/></li>
				<li key={10} onClick={() => handleClick(10)} className="PortList"><img src="https://i.postimg.cc/cL5WLc6R/Calen10.png" alt="Boton" className="Port"/></li>
				<li key={11} onClick={() => handleClick(11)} className="PortList"><img src="https://i.postimg.cc/yNMzFYmW/Calen11.png" alt="Boton" className="Port"/></li>
				<li key={12} onClick={() => handleClick(12)} className="PortList"><img src="https://i.postimg.cc/zfbrbRR9/Calen12.png" alt="Boton" className="Port"/></li>
			</ul>
			<article>{contenido}</article>
		</div>
	);
};

export default CalenCumaMenu;