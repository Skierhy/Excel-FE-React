import { useState } from 'react';
import { convert } from '../helpers/convert';

export const useOP = () => {
	const [TableShow, setTableShow] = useState([]);
	const [id, setId] = useState('');
	const [search, setSearch] = useState({});
	const [msg, setMsg] = useState(null);
	const { convertirJSON, Update } = convert();

	// mostrar todas las tablas
	const showTable = async () => {
		const resp = await fetch(
			'https://excel-be-react.onrender.com/api/tablas'
		);
		const data = await resp.json();
		setTableShow(data);
	};

	// eliminar tabla
	const handleDelete = async (e) => {
		e.preventDefault();
		const data = await fetch(
			`https://excel-be-react.onrender.com/api/tablas/${id}`,
			{
				method: 'DELETE',
			}
		);
		const resp = await data.json();
		setMsg(resp);
		console.log(msg);
	};

	// buscar tabla por id
	const searchTable = async (e) => {
		e.preventDefault();
		const resp = await fetch(
			`https://excel-be-react.onrender.com/api/tablas/${id}`
		);
		const data = await resp.json();
		setSearch([data]);
	};

	// actualizar tabla
	const handleUpdate = async (e) => {
		e.preventDefault();
		const data = await fetch(
			`https://excel-be-react.onrender.com/api/tablas/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(Update),
			}
		);
		const resp = await data.json();
		setMsg(resp);
	};

	return {
		TableShow,
		handleDelete,
		searchTable,
		search,
		handleUpdate,
		setId,
		convertirJSON,
		showTable,
	};
};
