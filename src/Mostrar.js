import {useState} from 'react';

const Mostrar = (info) => {
	const [contenido, setContenido] = useState(null);
	const handleClick = (id) => {
	const item = info.find(item => item.id === id);
		setContenido(item ? item.content : null);
	};
	return {contenido, handleClick};
};

export default Mostrar;
